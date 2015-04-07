import ApplicationSerializer from 'pifuxelck-ember/serializers/application';

export default ApplicationSerializer.extend({
  serializeIntoHash: function(hash, type, snapshot, options) {
    return hash["user"] = this.serialize(snapshot, options);
  }
});
