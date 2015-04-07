import DS from 'ember-data';

export default DS.Model.extend({
  displayName: DS.attr('string'),
  password: DS.attr('string'),
  login: function() {
    this.set('loggingIn', true);
    return this.save();
  },
  register: function() {
    this.set('registering', true);
    return this.save();
  }
});
