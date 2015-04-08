import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    this.set('newImage', this.store.createRecord('drawing/image', {
      backgroundColor: {red: 255, green: 255, blue: 0, alpha: 1}
    }));
    return this._super();
  }
});
