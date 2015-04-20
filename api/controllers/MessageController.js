/**
 * MessageController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	//TODO add pagination and sorting
	/*
	 * Pull all user messages from DB as well as passport
	 */
	index: function (req, res) {

		  //calls each function in array and then call final callback. If err is found immediantly calls final callback.
		  async.waterfall([
		  	function (callback) {
		  		Passport.findOne({protocol: "local", user: req.user.id})
		  		.exec(function (err, passport) {
		  			callback(err, passport);
		  		});
		  	},

		  	function (passport, callback) {
		  		Message.find().where({owner: req.user.id})
		  		.exec(function (err, messages) {
		  			callback(err, {messages: messages, passport: passport})
		  		});
		  	}
		  ],

		  //final cb
		  function (err, results) {
		  	if(err || !results) {
		  		res.serverError(err);
		  		sails.log(err);
		  	} else {
		  		if(results.messages.length < 1) {
		  			res.ok({user: req.user, "messages": results.messages, token: results.passport.accessToken}, "message/nomessages");
		  		} else {
		    		res.ok({user: req.user, "messages": results.messages, token: results.passport.accessToken}, "message/messages");
		  		}
		  	}
		  });

	},

 
	new: function (req, res) {
		res.view("message/new");
	},


	//TODO parse req.body and validate
	create: function (req, res) {
		req.body.owner = req.user.id;
		sails.log(req.body);

		var callback = function (err, message) {
			if(err) {
				sails.log(err);
				res.serverError(err);
			} else {
				sails.log("created message");
				sails.log(message);
				res.redirect("/message/show/" + message.id );
			}
		};


		Message.create(req.body).exec(callback(err, message));
				
	},

	show: function (req, res) {


		if(!typeof req.params.all().id === "string") {
			sails.log("/message/show No message ID provided");  
			res.serverError("No message id provided");
		}

		var id = req.params.all().id;

		var callback = function (err, message) {
			if(err) {
				sails.log(err);
				res.serverError(err);
			} else {
				if(message.length > 0) {
					res.ok({"message": message[0], user: req.user}, "message/message");
				} else {
					sails.log("Not authenticated to see that message");
					res.serverError("Not authenticated to see that message");
				}
			}
		};

		Message.find({"id": id}).where({owner: req.user.id}).limit(1).exec(callback(err, message));


	},

	// TODO
	update: function () {
		res.redirect("/message");
	},


	// overwritten

	find: function () {
		res.redirect("/message");
	},

	findAll: function () {
		res.redirect("/message");
	},

	destroy: function () {
		res.redirect("/message");
	}


};

