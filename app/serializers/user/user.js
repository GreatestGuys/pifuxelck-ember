import ApplicationSerializer from 'pifuxelck-ember/serializers/application';

export default ApplicationSerializer.extend({
  serializeIntoHash: function(hash, type, snapshot, options) {
    return hash["user"] = this.serialize(snapshot, options);
  },
  typeForRoot: function() {
    return this._super('user/user');
  }
});
