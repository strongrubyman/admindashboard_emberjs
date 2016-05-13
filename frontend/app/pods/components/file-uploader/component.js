import Ember from 'ember';
import EmberUploader from 'ember-uploader';
import config from 'frontend/config/environment';

export default EmberUploader.FileField.extend({
  //url: null,
  //successUpload: 'successUpload',
  //failUpload: 'failUpload',
  //pendingUpload: 'pendingUpload',
  getTransactionFile: 'getTransactionFile',
  fileType: null,

  filesDidChange: function(files) {
    //var uploadUrl = this.get('url'),
    //  component = this;

    if (!Ember.isEmpty(files)) {
      this.sendAction('getTransactionFile', this.get('fileType'), files[0]);
    }
  }
});
