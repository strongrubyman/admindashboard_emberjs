import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import RoleValidation from 'frontend/mixins/routes/role-validation';

export default Ember.Route.extend(AuthenticatedRouteMixin, RoleValidation, {
  permittedRoles: ['admin'],

});
