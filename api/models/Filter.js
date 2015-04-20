var Filter = {

	scehma: true,

	attributes: {
		key: {type: "string", unique: true},
		value: {type: "string"},

		rules: {
			collection: "rule",
			via: "filters"
		}
	}

};

module.exports = Filter;