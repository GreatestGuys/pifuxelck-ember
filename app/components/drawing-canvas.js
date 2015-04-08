import Ember from 'ember';

export default Ember.Component.extend({
  width: 500,
  height: 500,
  //attributeBindings: ['width','height'],
  classNames: ["drawing-canvas"],
  eventManager: Ember.Object.create({
    isDrawing: false,
    mouseDown: function(event, view) {
      this.set('isDrawing', true);
      var image = view.get('imageModel');
      var line = image.addLine();
      line.addPoint(event.offsetX / view.get('width'), event.offsetY / view.get('height'));
      this.set('currentLine', line);
      view.rerender();
    },
    mouseUp: function() {
      this.set('isDrawing', false);
    },
    mouseEnter: function() {
      if(this.get('wasDrawing')) {
        this.set('isDrawing', true);
      }
      this.set('wasDrawing', false);
    },
    mouseLeave: function() {
      if(this.get('isDrawing')) {
        this.set('wasDrawing', true);
      }
      this.set('isDrawing', false);
    },
    mouseMove: function(event, view) {
      if(this.get('isDrawing')) {
        // Add a point to the current line.
        var line = this.get('currentLine');
        line.addPoint(event.offsetX / view.get('width'), event.offsetY / view.get('height'));
        view.rerender();
      }
    }
  })
});
