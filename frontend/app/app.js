import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,

  isAlreadyInitialized: false,

  ready: function() {
    this.set('isAlreadyInitialized', true);
  }
});

Ember.$.ajaxSetup({
  headers: {
    'X-CSRF-Token': Ember.$("meta[name='csrf-token']").attr("content")
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
