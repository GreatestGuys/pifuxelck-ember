import DS from 'ember-data';

export default DS.Model.extend({
  backgroundColor: DS.attr('color'),
  lines: DS.hasMany('drawing/line'),
  addLine: function(data) {
    data = data || {};
    data.color = data.color || {red: 0, green: 0, blue: 0, alpha: 1};
    data.size = data.size || 0.001;
    var line = this.store.createRecord('drawing/line', data);
    this.get('lines').addObject(line);
    return line;
  }
});
