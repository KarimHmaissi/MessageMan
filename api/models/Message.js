/**
* Message.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

// module.exports = {

//   schema: true,

//   attributes: {
//   	url: String,
//   	content: String,
//   	position: String,
//   	multistep: Boolean,
//   	multiStepContent: String,
//   	hook: String,
//   }
// };


var Message = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    name: {type: "string"},
    content: {type: "string"},
    position: {type: "string"},

    owner : { model: 'user' },

    rules: {
      collection: "rule",
      via: "message"
    }

  }
};

module.exports = Message;

