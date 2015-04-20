/**
 * RuleController
 *
 * @description :: Server-side logic for managing rules
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	//TODO add pagination and sorting
	index: function (req, res) {

		var callback = function (err, rules) {
			if(err) {
				sails.log(err);
				res.serverError(err);
			} else {
				if(rules.length < 1) {
					res.ok({user: req.user}, "rules/norules");
				} else {
					res.ok({user: req.user, rules: rules}, "rule/rules");
				}
			}
		};

		Rule.find().where({owner: req.user.id}).exec(callback(err, rules));

	},

	new: function (req, res) {

		var callback = function (err, messages) {
			if(err) {
				sails.log(err);
				res.serverError(err);
			} else {
				if(messages.length < 0) {
					//TODO handle case where user has not created any messages
					res.redirect("/message/new");
				}  else {
					res.view({messages: messages}, "rule/new");
				}
			}
		}

		Message.find().where({owner: req.user.id}).exec(callback(err, messages));

	},

	create: function (req, res) {
		// body...
	},


	show: function (req, res) {
		
	}

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

}