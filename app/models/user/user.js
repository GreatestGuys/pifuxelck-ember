import DS from 'ember-data';

export default DS.Model.extend({
  displayName: DS.attr('string'),
  password: DS.attr('string'),
  login: function() {
    this.set('loggingIn', true);
    this.save();
  },
  register: function() {
    this.set('registering', true);
    this.save();
  }
});
