import { Meteor } from 'meteor/meteor';

import '../imports/api/collections.js'; 

import { Message } from '../imports/api/collections.js';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('messages', ()=>{
  	return Message.find({});
  });

});


Meteor.methods({
	insertMsg:function(message){
		Message.insert({
	  		text: message,
	  		createdAt: new Date(),
	  		username: Meteor.user().username,
	  		user: Meteor.userId()
	  	});
	}
});
