import Ember from 'ember';
import moment from 'moment';

export default Ember.Mixin.create({
  queryParams: ['week'],

  week: null
});
