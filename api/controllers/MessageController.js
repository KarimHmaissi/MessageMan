/**
 * MessageController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	index: function (req, res) {
		console.log("Message.index");
		console.log(req.user);
		res.view("message/messages", {user: req.user});
	},


	new: function (req, res) {
		res.view("message/new");
	},

	create: function (req, res) {
		console.log(req.body);
		console.log(req.params.all());

		res.send({created: "notreally", message:req.body, user: req.user});
	}

};

