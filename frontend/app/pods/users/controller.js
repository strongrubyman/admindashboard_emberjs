import Ember from 'ember';
import config from 'frontend/config/environment';

export default Ember.Controller.extend({
  usersService: Ember.inject.service('users'),

  roles: config.userRoles,

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
    },

    destroyRecord: function(user) {
      if (Number(user.get('id')) === Number(this.get('session.id'))) {
        alert('You can delete yourself!')
      } else {
        if (confirm('Delete user ' + user.get('userIdentity') + ' ?')) {
          user.destroyRecord();
        }
      }
    }
  },

  userColumns: [
    Ember.Object.create({propertyName: "email", title: 'Email'}),
    Ember.Object.create({propertyName: "role", title: 'Role'}),
    Ember.Object.create({propertyName: "name", title: 'Name'}),
    Ember.Object.create({propertyName: "parent.userIdentity", title: 'Related Wholesaler/Brewery'}),
    Ember.Object.create({propertyName: "phoneNumber", title: 'Phone Number'}),
    Ember.Object.create({propertyName: "contactAddress1", title: 'Contact Address 1'}),
    Ember.Object.create({propertyName: "contactAddress2", title: 'Contact Address 2'}),
    Ember.Object.create({propertyName: "contactCity", title: 'Contact City'}),
    Ember.Object.create({propertyName: "contactState", title: 'Contact State'}),
    Ember.Object.create({propertyName:  "contactZip", title: 'Contact Zip'}),
    Ember.Object.create({ title: 'Delete', template: 'users-list-delete'})
  ],

  relations: function() {
    var role =  this.get('newUser.role');

    if (role === 'manager') {
      role = 'wholesaler';
    }

    return this.get('usersService.' + Ember.String.pluralize(role));
  }.property('newUser.role'),

  isShowSelect: function() {
    return ['brewery', 'wholesaler', 'manager'].contains(this.get('newUser.role'));
  }.property('newUser.role'),

  relatedResourceName: function() {
    return this.get('newUser.role') === 'brewery' ? 'Brewery' : 'Wholesaler';
  }.property('newUser.role'),

  clearParent: function() {
    this.get('newUser').set('parent', null);
  }.observes('newUser.role'),

  newUser: null,
  usersAndAdmins: Ember.computed.alias('usersService.usersAndAdmins')
});
