import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'canvas',
  width: 500,
  height: 500,
  attributeBindings: ['width','height'],
  didInsertElement: function() {
    var ctx = this.get('element').getContext('2d'),
        image = this.get('drawing'),
        bgColor = image.get('backgroundColor'),
        width = this.get('width'),
        height = this.get('height');
    Object.keys(bgColor).map(function(key) {
      if(key !== "alpha") {
        bgColor[key] = Math.round(bgColor[key] * 255);
      }
    });
    ctx.fillStyle = "rgba("+ [bgColor.red, bgColor.green, bgColor.blue, bgColor.alpha].join() +")";
    ctx.fillRect(0, 0, this.get('width'), this.get('height'));
    image.get('lines').forEach( (line) => {
      ctx.beginPath();
      ctx.lineWidth = line.get('size') * width;
      ctx.lineCap = 'round';
      ctx.moveTo(line.get('points.firstObject.x') * width, line.get('points.firstObject.y') * height);
      bgColor = line.get('color');
      console.log(bgColor);
      Object.keys(bgColor).map(function(key) {
        if(key !== "alpha") {
          bgColor[key] = Math.round(bgColor[key] * 255);
        }
      });
      ctx.strokeStyle = "rgba("+ [bgColor.red, bgColor.green, bgColor.blue, bgColor.alpha].join() +")";
      line.get('points').forEach( (point) => {
        ctx.lineTo(point.get('x') * width, point.get('y') * height);
      });
      ctx.stroke();
    });
  }
});
