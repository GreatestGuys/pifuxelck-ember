import ApplicationSerializer from 'pifuxelck-ember/serializers/application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    lines: { embedded: 'always' }
  },
  normalizePayload: function(payload) {
    // TODO: Replace with Ember.guidFor(line)
    var id = 1;
    var ret = {};
    payload.lines.forEach(function(line) {
      line.id = id++;
      line.points.forEach(function(point) {
        point.id = id++;
      });
    });
    ret['drawing/image'] = payload;
    ret = this._super(ret);
    console.log(ret);
    return ret;
  }
});
