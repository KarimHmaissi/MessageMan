/**
 * MessageController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	index: function (req, res) {

		Passport
		  .findOne({ protocol: 'local', user: req.user.id })
		  .exec(function(err, passport) {
		  	if(err){sails.error(err)}
		    Message
		    .find()
		    .where({owner: req.user.id})
		    .exec(function (err, messages) {
		    	if(err) {
		    		res.serverError(err);
		    	} else {
		    		if(messages.length < 1) {
		    			res.ok({user: req.user, "messages": messages, token: passport.accessToken}, "message/nomessages");
		    		} else {
		    			res.ok({user: req.user, "messages": messages, token: passport.accessToken}, "message/messages");
		    		}
		    		sails.log(passport.accessToken);
		    		
		    	}
		    });
		  });
	},

 
	new: function (req, res) {
		res.view("message/new");
	},

	create: function (req, res) {
		req.body.owner = req.user.id;
		sails.log(req.body);

		Message.create(req.body)
			.exec(function (err, message) {
				if(err) {
					res.serverError(err);
				} else {
					sails.log("created message");
					sails.log(message);
					res.redirect("/message/show/" + message.id );
				}
				
			});
	},

	show: function (req, res) {

		console.log(req.params.all());

		if(typeof req.params.all().id === "string" && typeof req.user === "object") {
			var id = req.params.all().id;

			Message.find({"id": id})
				.where({owner: req.user.id})
				.limit(1)
			.exec(function(err, foundMessage) {

				if(err) {
					res.serverError(err);
				} else {
					sails.log("found message");
					if(foundMessage.length > 0) {
						res.ok({"message": foundMessage[0], user: req.user}, "message/message");
					} else {
						res.serverError("Not authenticated to see that message");
					}
				}
				
			});		


		} else {
			res.serverError("No message id provided");		}
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

