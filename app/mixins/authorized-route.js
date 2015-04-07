import Ember from 'ember';

export default Ember.Mixin.create({
  beforeModel: function(transition) {
    if(!this.get('session.loggedIn')) {
      this.set('session.requestedTransition', transition);
      this.transitionTo('index');
    }
  }
});
