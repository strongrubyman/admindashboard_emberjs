import Ember from 'ember';

export default Ember.Controller.extend({
  errorMessage: '',

  actions: {
    authenticate: function() {
      var data = this.getProperties('identification', 'password'),
        controller = this,
        transition = this.get('session').authenticate('simple-auth-authenticator:devise', data);

      transition.catch(function(err) {
        controller.set('errorMessage', err.error);
      });

      return transition;
    }
  }
});
