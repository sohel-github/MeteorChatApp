import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Message } from '../imports/api/collections.js';

import './main.html';

Meteor.subscribe('messages');

Template.chat.helpers({
  messages: function(){
  	return Message.find();
  }
});

Template.chat.events({
  'keypress textarea': function(e,ins){
  	if(e.keyCode == 13){
  		e.preventDefault();
	  	var message = ins.find('textarea').value;
	  	Meteor.call('insertMsg', message);
	  	ins.find('textarea').value='';
  	}
  }
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});
