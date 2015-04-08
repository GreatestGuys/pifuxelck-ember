import Ember from 'ember';

var Session = Ember.Object.extend({
  _currentUser: null,
  _auth: null,
  currentUser: function() {
    return this.get('_currentUser');
  }.property('_currentUser'),
  auth: function() {
    var auth = this.get('_auth');
    if(auth === null) {
      auth = window.localStorage.getItem('auth');
    }
    return auth;
  }.property('_auth'),
  login: function(user) {
    if(user.get('constructor.typeKey') === 'user/user') {
      var auth = this.store.metadataFor('user/user').auth;
      this.set('_currentUser', user);
      this.set('auth', auth);
      window.localStorage.setItem('auth', auth);
    }
  },
  loggedIn: function() {
    return (this.get('_currentUser') !== null || this.get('auth') !== null);
  }.property('_currentUser')
});

export function initialize(container, application) {
  container.injection('global:session', 'store', 'store:main');

  container.register('global:session', Session, { singleton: true });
  application.inject('controller', 'session', 'global:session');
  application.inject('route', 'session', 'global:session');
  application.inject('model', 'session', 'global:session');
  application.inject('serializer', 'session', 'global:session');
  application.inject('adapter', 'session', 'global:session');
}

export default {
  name: 'session',
  initialize: initialize
};
