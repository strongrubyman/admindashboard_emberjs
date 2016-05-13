import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  role: DS.attr('string'),
  name: DS.attr('string'),
  password: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  contactAddress1: DS.attr('string'),
  contactAddress2: DS.attr('string'),
  contactCity: DS.attr('string'),
  contactState: DS.attr('string'),
  contactZip: DS.attr('string'),
  parent: DS.belongsTo('user', {inverse: 'children'}),
  children: DS.hasMany('user', {inverse: 'parent'}),

  userIdentity: function() {
    return this.get('name') || this.get('email');
  }.property('name', 'email'),

  isAdmin: Ember.computed.equal('role', 'admin'),
  isNotAdmin: Ember.computed.not('isAdmin'),

  isBrewery: function() {
    return this.get('role') === 'brewery' && Ember.isEmpty(this.get('parent.id'));
  }.property('role', 'parent'),

  isWholesaler: function() {
    return this.get('role') === 'wholesaler' && Ember.isEmpty(this.get('parent.id'));
  }.property('role', 'parent'),

  isManager: function() {
    return this.get('role') === 'manager' && this.get('parent.id');
  }.property('role', 'parent'),

  isBreweryUser: function() {
    return this.get('role') === 'brewery' && this.get('parent.id');
  }.property('role', 'parent'),

  isWholesalerUser: function() {
    return this.get('role') === 'wholesaler' && this.get('parent.id');
  }.property('role', 'parent'),

  isUser: function() {
    return this.get('parent.id');
  }.property('role', 'parent')
});
