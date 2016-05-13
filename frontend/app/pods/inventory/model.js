import DS from 'ember-data';

export default DS.Model.extend({
  gpaId: DS.attr('string'),
  pdcn: DS.attr('string'),
  brand: DS.attr('string'),
  size: DS.attr('string'),
  totalInventory: DS.attr('string'),
  brewery: DS.belongsTo('user'),
  shipDate: DS.attr('string')
});
