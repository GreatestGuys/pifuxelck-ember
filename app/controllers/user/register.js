import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    register: function() {
      var user = this.get('model');
      user.register((user) => {
        this.get('session').login(user);
      }, () => {});
    }
  }
});
