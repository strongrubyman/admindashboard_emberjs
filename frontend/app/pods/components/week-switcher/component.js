import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['btn-group'],
  ds: null,
  route: null,
  week: null,

  nextWeek: function() {
    return Number(this.get('currentWeek')) + 1;
  }.property('currentWeek'),

  prevWeek: function() {
    return Number(this.get('currentWeek')) - 1;
  }.property('currentWeek'),

  currentWeek: function() {
    return this.get('week') || moment().isoWeek();
  }.property('week')
});
