import Ember from 'ember';
import WeekMixin from 'frontend/mixins/controllers/week';

export default Ember.Controller.extend(WeekMixin, {
  transactionColumns: [
    Ember.Object.create({propertyName: "wholesaler", title: 'Wholesaler'}),
    Ember.Object.create({propertyName: "q", title: 'Ship Week of xxx'}),
    Ember.Object.create({propertyName: "q", title: 'Ship Week of xxx'}),
    Ember.Object.create({propertyName: "shipDate", title: 'Ship Date'})
  ]
});
