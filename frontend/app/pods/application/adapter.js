import DS from 'ember-data';
import config from 'frontend/config/environment';
import Ember from 'ember';
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
	namespace: config.namespace,
	// host: config.apiHost,

  headers: {
    "X-CSRF-Token": Ember.$('meta[name="csrf-token"]').attr('content')
  }
});
