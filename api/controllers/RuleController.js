module.exports = {
	index: function (req, res) {


		if(typeof req.user === "object") {
			// Passport
			// .findOne({protocol: "local", user: req.user.id})
			// .exec(function (err, passport) {
				// if(err){
					// sails.log(err);
					// res.serverError(err);
				// } else if(passport && !err) {

					Rule.find().where({owner: req.user.id})
					.exec(function (err, rules) {
						
						if(err) {
							sails.log(err);
							res.serverError(err);
						} else if(rules && !err) {
							if(rules.length < 1) {


								

									res.ok({user: req.user}, "rule/norules");								


							} else {
								res.ok({user: req.user, rules: rules}, "rule/rules");

								

							}
						} else {
							res.serverError();

						}

					});

				// } else {
					// res.serverError();
				// }
			// });
		} else {
			res.redirect("/login");
		}

		
	},

	new: function (req, res) {
		// if(typeof req.user === "object") {
		// 	Passport.findOne({protocol: "local", user: req.user})
		// }
		Message.find().where({owner: req.user.id})
		.exec(function (err, messages) {
			if(messages && messages.length > 0) {
				sails.log(messages);
				res.view({messages: messages}, "rule/new");

			} else {
				res.serverError(err);
			}
		});
	},

	create: function (req, res) {
		// body...
	},


	show: function (req, res) {
		
	}

}