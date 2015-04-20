var Rule = {
	schema: true,

	attributes: {
		url: {type: "string"},
		hook: {type: "string"},
		views: {type: "integer"},
		converts: {type: "integer"},

		owner: {model: "user"},
		message: {model: "message"},

		filters: {
			collection: "filter",
			via: "rules"
		}
	}
};

module.exports = Rule;