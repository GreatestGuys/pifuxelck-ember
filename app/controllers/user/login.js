import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login: function() {
      var user = this.get('model');
      user.login((user) => {
        this.get('session').login(user);
      }, () => {});
    }
  }
});
