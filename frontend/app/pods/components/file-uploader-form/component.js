import Ember from 'ember';

export default Ember.Component.extend({
	name: null,
	url: null,
	//responceMessage: '',
  getTransactionFile: 'getTransactionFile',
	actions: {
    getTransactionFile: function(file) {
      this.sendAction('getTransactionFile', file);
    }
		//successUpload: function(response) {
		//	this.set('responceMessage', 'Success');
		//},
    //
		//failUpload: function(error) {
		//	this.set('responceMessage', 'Error');
		//},
    //
    //pendingUpload: function() {
    //  this.set('responceMessage', 'Loading');
    //}
	}
});
