import Ember from 'ember';

export default Ember.Controller.extend({
  usersService: Ember.inject.service('users'),

  userErrorsHash: null,

  actions: {
    addUser: function(callback) {
      var newUser = this.get('newUser'),
        controller = this,
        props = newUser.toJSON(),
        promise = newUser.save();

      callback(promise);

      promise.then(function() {
        controller.set('userErrorsHash', null);
        controller.set('newUser', controller.store.createRecord('user'));
      }).catch(function(err) {
        controller.set('userErrorsHash', err.errors);
        controller.set('newUser', controller.store.createRecord('user', props));
      });
    }
  },

  userColumns: [
    Ember.Object.create({propertyName: "email", title: 'Email'}),
    Ember.Object.create({propertyName: "name", title: 'Name'}),
    Ember.Object.create({propertyName: "phoneNumber", title: 'Phone Number'}),
    Ember.Object.create({propertyName: "contactAddress1", title: 'Contact Address 1'}),
    Ember.Object.create({propertyName: "contactAddress2", title: 'Contact Address 2'}),
    Ember.Object.create({propertyName: "contactCity", title: 'Contact City'}),
    Ember.Object.create({propertyName: "contactState", title: 'Contact State'}),
    Ember.Object.create({propertyName: "contactZip", title: 'Contact Zip'})
  ],

  newUser: null,
  wholesalers: Ember.computed.alias('usersService.wholesalers'),

  roleSetter: function() {
    this.get('newUser').set('role', 'wholesaler');
  }.observes('newUser.role')
});
