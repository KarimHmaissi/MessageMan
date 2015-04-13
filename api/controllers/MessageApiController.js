/**
 * MessageApiController
 *
 * @description :: Server-side logic for managing Messageapis
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	show: function (req, res) {

		if(typeof req.params.all().id === "string" && typeof req.user === "object" ) {
			var id = req.params.all().id

			Message.find({id: id})
			.where({owner: req.user[0].id})
			.exec(function (err, message) {
				if(message.length > 0) {
					res.json(message);

				} else {
					res.forbidden({"error": "Not authenticated to see that message"});
				}

				
			});
		} else {
			res.forbidden({"error": "Not authenticated to see that message"});
		}		
	},


	//message has converted
	convert: function (req, res) {

		res.json({"thanks": "thanks"});
	}

};

