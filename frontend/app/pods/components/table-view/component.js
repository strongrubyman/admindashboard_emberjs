import Ember from 'ember';

export default Ember.Component.extend({
  columns: null,
  data: null,
  destroyRecord: 'destroyRecord',
  showRecord: 'showRecord',

  actions: {
    destroyRecord: function(record) {
      this.sendAction('destroyRecord', record);
    },

    showRecord: function(record) {
      this.sendAction('showRecord', record);
    }
  }
});
