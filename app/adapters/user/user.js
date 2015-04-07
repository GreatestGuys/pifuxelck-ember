import ApplicationAdapter from 'pifuxelck-ember/adapters/application';
import Ember from 'ember';

var inflector = Ember.Inflector.inflector;
inflector.uncountable('account/register');
inflector.uncountable('account/login');

export default ApplicationAdapter.extend({
  buildURL: function(type, id, record) {
    // Send the user to the /account/register URL if they're registering
    // This is a simple hack to not require a special 'login' model to
    // point to a different URL when logging in vs. registering.
    if(record.get('registering')) {
      record.set('registering', false);
      type = "account/register";
    } else if(record.get('loggingIn')) {
      record.set('loggingIn', false);
      type = "account/login";
    }
    return this._super(type, id, record);
  }
});
