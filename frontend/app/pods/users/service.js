import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service('store'),

  allUsersDirty: function() {
    if (this.get('session.isAuthenticated')) {
      return this.get('store').findAll('user');
    } else { return []; }
  }.property('session.{isAuthenticated,id}'),

  allUsers: Ember.computed.filterBy('allUsersDirty', 'isNew', false),

  breweries: Ember.computed.filterBy('allUsers', 'isBrewery', true),

  wholesalers: Ember.computed.filterBy('allUsers', 'isWholesaler', true),

  usersAndAdmins: function() {
    return this.get('allUsers').filter(function(user){
      return user.get('isAdmin') || user.get('isUser');
    });
  }.property('allUsers.@each.id'),

  breweriesOrWholesalers: function() {
    return this.get('allUsers').filter(function(user){
      return user.get('isBrewery') || user.get('isWholesaler');
    });
  }.property('allUsers.@each.id')
});
