import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api/2',
  headers: function() {
    return { "x-pifuxelck-auth": this.get('session.auth') };
  }.property('session.auth')
});
