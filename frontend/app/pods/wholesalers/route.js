import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import RoleValidation from 'frontend/mixins/routes/role-validation';

export default Ember.Route.extend(AuthenticatedRouteMixin, RoleValidation, {
  permittedRoles: ['admin'],

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('newUser', this.store.createRecord('user'));
  }
});
