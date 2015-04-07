import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api/2',
  headers: function() {
    console.log(this.get('session.auth'));
    return { "x-pifuxelck-auth": this.get('session.auth') };
  }
});
