import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import WeekMixin from 'frontend/mixins/routes/week';
import RoleValidation from 'frontend/mixins/routes/role-validation';

export default Ember.Route.extend(AuthenticatedRouteMixin, WeekMixin, RoleValidation, {
  permittedRoles: ['admin', 'brewery'],

  model: function(params) {
    return Ember.RSVP.hash({
      transactions: this.store.query('transaction', {week: params.week, user_id: params.user_id}),
      products: this.store.query('product', {week: params.week, user_id: params.user_id}),
      inventories: this.store.query('inventory', {week: params.week, user_id: params.user_id}),
      targetUserId: params.user_id
    });
  },

  setupController: function(controller, hash) {
    this._super(controller, hash.transactions);
    controller.set('inventories', hash.inventories);
    controller.set('transactions', hash.transactions);
    controller.set('targetUserId', hash.targetUserId);
  }
});
