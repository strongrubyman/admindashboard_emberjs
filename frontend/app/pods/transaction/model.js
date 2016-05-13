import DS from 'ember-data';

export default DS.Model.extend({
  wholesaler: DS.attr('string'),
  gpaId: DS.attr('string'),
  brand: DS.attr('string'),
  size: DS.attr('string'),
  onHandBegin: DS.attr('string'),
  salesRatePerDay: DS.attr('string'),
  daysOnHand: DS.attr('string'),
  inboundUnitsT0: DS.attr('string'),
  inboundUnitsT1: DS.attr('string'),
  palletsShipping_t1: DS.attr('string'),
  daysShippingT1: DS.attr('string'),
  netDaysT1: DS.attr('string'),
  poNumber: DS.attr('string'),
  note: DS.attr('string'),
  shipDate: DS.attr('string'),
  unitsPackaging: DS.attr('string')
});
