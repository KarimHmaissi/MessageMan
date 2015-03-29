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
    url  : { type: 'string', unique: true },
    content : { type: 'string'},
    position : { type: 'string'},
    multistep : { type: 'string'},
    multiStepContent : { type: 'string'},
    hook : { type: 'string'},

    owner : { model: 'user' }

  }
};

module.exports = Message;

