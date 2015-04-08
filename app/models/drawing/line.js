import DS from 'ember-data';
import Geometry from 'pifuxelck-ember/utils/geometry';

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
  size: DS.attr('number'),

  addPoint: function(x, y) {
    var points = this.get('points');
    var lastPoint = this.get('points.lastObject');
    var newPoint = this.store.createRecord('point', {
      x: x,
      y: y
    });
    if(lastPoint) {
      console.log("Distance:", Geometry().getDistance(lastPoint, newPoint));
      console.log("Distance greater than 0.5?", Geometry().getDistance(lastPoint, newPoint) > 0.5);
    }
    if(!lastPoint || Geometry().getDistance(lastPoint, newPoint) > 0.5) {
      points.addObject(newPoint);
      return newPoint;
    } else {
      this.store.deleteRecord(newPoint);
      return null;
    }
  }
});
