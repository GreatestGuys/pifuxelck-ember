import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard');
  this.route('user', function() {
  });
  this.route('game', function() {
    this.route('respond', { path: 'respond/:game_id'});
  });
});

export default Router;
