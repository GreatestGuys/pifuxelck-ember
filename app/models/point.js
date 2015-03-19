import DS from 'ember-data';

export default DS.Model.extend({
  line: DS.belongsTo('drawing/line'),

  x: DS.attr('number'),
  y: DS.attr('number')
});
