import Ember from 'ember';

var Session = Ember.Object.extend({
  _currentUser: null,
  currentUser: function() {
    return this.get('_currentUser');
  }.property('_currentUser'),
  login: function(user) {
    if(user.get('constructor.typeKey') === 'user') {
      this.set('_currentUser', user);
    }
  }
});

export function initialize(container, application) {
  container.register('global:session', Session, { singleton: true });
  application.inject('controller', 'session', 'global:session');
  application.inject('route', 'session', 'global:session');
  application.inject('model', 'session', 'global:session');
  application.inject('serializer', 'session', 'global:session');
}

export default {
  name: 'session',
  initialize: initialize
};