import Ember from 'ember';
import RoutesDefaultTransitionsMixin from '../../../mixins/routes/default-transitions';
import { module, test } from 'qunit';

module('Unit | Mixin | routes/default transitions');

// Replace this with your real tests.
test('it works', function(assert) {
  var RoutesDefaultTransitionsObject = Ember.Object.extend(RoutesDefaultTransitionsMixin);
  var subject = RoutesDefaultTransitionsObject.create();
  assert.ok(subject);
});
