import ApplicationAdapter from 'pifuxelck-ember/adapters/application';
import Ember from 'ember';

var inflector = Ember.Inflector.inflector;
inflector.uncountable('games/inbox');

export default ApplicationAdapter.extend({
});
