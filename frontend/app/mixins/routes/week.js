import Ember from 'ember';
import moment from 'moment';

export default Ember.Mixin.create({
  queryParams: {
    week: {
      refreshModel: true
    }
  },

  resetController: function(controller, isExiting) {
    if (isExiting) {
      controller.set('week', moment().isoWeek());
    }
  }
});
