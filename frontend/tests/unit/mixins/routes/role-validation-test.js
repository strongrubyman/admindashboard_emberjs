import Ember from 'ember';
import RoutesRoleValidationMixin from '../../../mixins/routes/role-validation';
import { module, test } from 'qunit';

module('Unit | Mixin | routes/role validation');

// Replace this with your real tests.
test('it works', function(assert) {
  var RoutesRoleValidationObject = Ember.Object.extend(RoutesRoleValidationMixin);
  var subject = RoutesRoleValidationObject.create();
  assert.ok(subject);
});
