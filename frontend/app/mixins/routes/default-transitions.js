import Ember from 'ember';

export default Ember.Mixin.create({
  beforeModel: function() {
    if (this.get('session.isAuthenticated')) {
      switch (this.get('session.role')) {
        case 'admin': this.replaceWith('admin'); break;
        case 'manager': this.replaceWith('wholesaler-dashboard', this.get('session.id')); break;
        case 'wholesaler': this.replaceWith('wholesaler-dashboard', this.get('session.id')); break;
        case 'brewery': this.replaceWith('brewery-dashboard', this.get('session.id')); break;
      }
    } else {
      this.replaceWith('login');
    }
  }
});
