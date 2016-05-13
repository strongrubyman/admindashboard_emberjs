import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['navbar', 'navbar-default'],

  usersService: Ember.inject.service('users'),

  breweries: Ember.computed.alias('usersService.breweries'),
  wholesalers: Ember.computed.alias('usersService.wholesalers'),
  breweriesOrWholesalers: Ember.computed.alias('usersService.breweriesOrWholesalers'),

  actions: {
    invalidateSession: function() {
      this.get('session').invalidate();
    }
  }
});
