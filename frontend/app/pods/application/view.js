import Ember from "ember";

export default Ember.View.extend({
  classNames: ['application'],
  classNameBindings: ['dynamicViewClass'],

  currentPath: function() {
    return this.get('controller.target.currentPath');
  }.property('controller.target.currentPath').volatile(),

  dynamicViewClass: function() {
    return this.get('currentPath').split('.').join(' ');
  }.property('currentPath').volatile()
});