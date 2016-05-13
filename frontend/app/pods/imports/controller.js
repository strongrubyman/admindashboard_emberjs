import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default Ember.Controller.extend({
  usersService: Ember.inject.service('users'),

  actions: {
    importFile: function(callback, fileType) {
      var transaction = this.get(fileType),
        controller = this;

      if (transaction.id && transaction.file) {
        var uploader = EmberUploader.Uploader.create({
          url: 'api/imports/' + fileType + '/' + transaction.id,
          paramName: 'imports'
        });

        var promise = uploader.upload(transaction.file);

        callback(promise);

        promise.then(function() {
          controller.set(fileType, {message: 'Importing Success'});
        }).catch(function() {
          controller.set(fileType + '.message', 'Importing Error');
        });
      } else {
        this.set(fileType + '.message', 'File not chosen or brewery not selected');
        callback(Ember.RSVP.Promise.resolve());
      }
    },

    getTransactionFile: function(fileType, file) {
      this.set(fileType + '.file', file)
    }
  },

  transactions: {},
  products: {},

  breweries: Ember.computed.alias('usersService.breweries')
});
