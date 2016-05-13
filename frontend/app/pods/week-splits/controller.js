import Ember from 'ember';
import moment from 'moment';
import WeekMixin from 'frontend/mixins/controllers/week';

export default Ember.Controller.extend(WeekMixin, {
  productColumns: [
    Ember.Object.create({propertyName: "group", title: 'Group'}),
    Ember.Object.create({propertyName: "brand", title: 'Brand'}),
    Ember.Object.create({propertyName: "pkg", title: 'Package'}),
    Ember.Object.create({propertyName: "monday", title: 'Monday'}),
    Ember.Object.create({propertyName: "tuesday", title: 'Tuesday'}),
    Ember.Object.create({propertyName: "wednesday", title: 'Wednesday'}),
    Ember.Object.create({propertyName: "thursday", title: 'Thursday'}),
    Ember.Object.create({propertyName: "friday", title: 'Friday'})
  ]
});
