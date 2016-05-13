import Ember from 'ember';
import Session from 'simple-auth/session';
import config from 'frontend/config/environment';

/**
 * CurrentUser Helper
 * Invoked before application initialized
 * @param container
 * @param application
 */
export function initialize(container, application) {
  Session.reopen({
    currentUser: null,
    role: Ember.computed.alias('secure.role'),
    id: Ember.computed.alias('secure.id'),

    isAdmin: Ember.computed.equal('role', 'admin'),
    isNotAdmin: Ember.computed.not('isAdmin'),
    isBrewery: Ember.computed.equal('role', 'brewery'),
    isWholesaler: Ember.computed.equal('role', 'wholesaler'),
    isManager: Ember.computed.equal('role', 'manager'),

    currentUserObserver: function() {
      if (this.get('isAuthenticated') && this.get('currentUser')) {
        var controller = container.lookup('controller:application');
        if (controller) {
          var isLoginCurrentPath = controller.get('currentPath').split('.').contains('login');

          if (isLoginCurrentPath) {
            controller.transitionToRoute(config['simple-auth'].routeAfterAuthentication);
          }
        }
      }
    }.observes('currentUser', 'isAuthenticated').on('init'),

    isAuthenticatedCallback: function() {
      if (this.get('secure.id') && this.get('isAuthenticated')) {
        var session = this;

        if (!application.get('isAlreadyInitialized')) { application.deferReadiness(); }

        container.lookup("service:store").findRecord('user', this.get('secure.id'))
          .then(function(currentUser) {
            session.set('currentUser', currentUser);

            if (!application.get('isAlreadyInitialized')) { application.advanceReadiness(); }
          })
          .catch(function(err) {
            if (err.errors && err.errors.anyBy('status', '401')) {
              session.invalidate();
            }
          });
      }
    }.observes('secure.id', 'isAuthenticated').on('init')
  });

  application.inject('service', 'session', 'simple-auth-session:main');
  application.inject('component', 'session', 'simple-auth-session:main');
}

export default {
  name: 'current-user',
  before: 'simple-auth',
  initialize: initialize
};
