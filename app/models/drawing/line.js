import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.belongsTo('drawing/image'),

  // An Ember object with red, green, blue,
  // and alpha keys. Values from 0 to 1.
  color: DS.attr('color'),

  // A list of all the points that make up
  // a single segment of line.
  points: DS.hasMany('point'),

  // 0 to 1 width of the line, where the value
  // corresponds to the 0-1 coordinate space of
  // the canvas itself.
  size: DS.attr('number')
});
