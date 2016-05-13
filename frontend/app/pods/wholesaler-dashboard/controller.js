import Ember from 'ember';
import moment from 'moment';
import WeekMixin from 'frontend/mixins/controllers/week';

export default Ember.Controller.extend(WeekMixin, {
  transactionColumns: [
    Ember.Object.create({propertyName: "poNumber", title: 'Purchase Order Number'}),
    Ember.Object.create({propertyName: "shipDate", title: 'Ship Date'}),
    Ember.Object.create({propertyName: "q", title: 'Item Name'}),
    Ember.Object.create({propertyName: "q", title: 'Package Type'}),
    Ember.Object.create({propertyName: "brand", title: 'Item Brand'}),
    Ember.Object.create({propertyName: "q", title: 'Item Group'}),
    Ember.Object.create({propertyName: "q", title: 'Velocity per Week'}),
    Ember.Object.create({propertyName: "q", title: 'Quantity'}),
    Ember.Object.create({propertyName: "q", title: 'On-Hand Units in pallets'}),
    Ember.Object.create({propertyName: "q", title: 'On-Order Days Total'}),
    Ember.Object.create({propertyName: "q", title: 'Projected DOI Total'}),
    Ember.Object.create({propertyName: "note", title: 'Notes'})
  ],

  totalColumns: [
    Ember.Object.create({propertyName: "poNumber", title: 'Purchase Order Number'}),
    Ember.Object.create({propertyName: "q", title: 'Pallet Quantity Total'}),
    Ember.Object.create({propertyName: "q", title: 'Weight Total'})
  ]
});
