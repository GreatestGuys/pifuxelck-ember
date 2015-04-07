import Ember from 'ember';
import AuthorizedRouteMixin from '../../../mixins/authorized-route';
import { module, test } from 'qunit';

module('AuthorizedRouteMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var AuthorizedRouteObject = Ember.Object.extend(AuthorizedRouteMixin);
  var subject = AuthorizedRouteObject.create();
  assert.ok(subject);
});
