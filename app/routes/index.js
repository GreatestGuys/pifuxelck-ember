import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var image,
        point1,
        point2,
        point3,
        line;
    image = this.store.createRecord('drawing/image', {
      backgroundColor: { red: 0.25, green: 0.25, blue: 0.25, alpha: 1 }
    });
    line = this.store.createRecord('drawing/line', {
      image: image,
      color: { red: 1, green: 0, blue: 0, alpha: 0 },
      size: 0.01
    });
    image.get('lines').pushObject(line);
    point1 = this.store.createRecord('point', { line: line, x: 0, y: 0 });
    point2 = this.store.createRecord('point', { line: line, x: 1, y: 1 });
    point3 = this.store.createRecord('point', { line: line, x: 0.25, y: 0.75 });
    line.get('points').pushObject(point1);
    line.get('points').pushObject(point2);
    line.get('points').pushObject(point3);
    return image;
  }
});
