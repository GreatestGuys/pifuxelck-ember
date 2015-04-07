import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    register: function() {
      var user = this.get('model');
      user.register().then((user) => {
        this.get('session').login(user);
        this.doTransition();
      }, () => {});
    },
    login: function() {
      var user = this.get('model');
      user.login().then((user) => {
        this.get('session').login(user);
        this.doTransition();
      }, () => {});
    }
  },
  doTransition: function() {
    if(this.get('session.requestedTransition')) {
      this.get('session.requestedTransition').retry();
    } else {
      this.transitionToRoute('dashboard');
    }
  }
});

