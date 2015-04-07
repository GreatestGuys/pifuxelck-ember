import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    register: function() {
      var user = this.get('model');
      user.register().then((user) => {
        this.get('session').login(user);
        this.transitionToRoute('dashboard');
      }, () => {});
    },
    login: function() {
      var user = this.get('model');
      user.login().then((user) => {
        this.get('session').login(user);
        this.transitionToRoute('dashboard');
      }, () => {});
    }
  }
});

