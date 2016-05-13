import DS from 'ember-data';

export default DS.Model.extend({
  gpaId: DS.attr('number'),
  brand: DS.attr('string'),
  pkg: DS.attr('string'),
  size: DS.attr('string'),
  group: DS.attr('string'),
  brewId: DS.attr('string'),
  oz: DS.attr('string'),
  palletQty: DS.attr('string'),
  layerQty: DS.attr('string'),
  layersPerPallet: DS.attr('string'),
  status: DS.attr('string'),
  pdcn: DS.attr('string'),
  brewery: DS.belongsTo('user'),
  shipDate: DS.attr('string'),

  monday: DS.attr('number', {defaultValue: 0}),
  tuesday: DS.attr('number', {defaultValue: 0}),
  wednesday: DS.attr('number', {defaultValue: 0}),
  thursday: DS.attr('number', {defaultValue: 0}),
  friday: DS.attr('number', {defaultValue: 0})
});
