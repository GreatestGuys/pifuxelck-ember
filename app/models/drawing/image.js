import DS from 'ember-data';

export default DS.Model.extend({
  backgroundColor: DS.attr('color'),
  lines: DS.hasMany('drawing/line')
});
