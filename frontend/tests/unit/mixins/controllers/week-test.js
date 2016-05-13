import Ember from 'ember';
import ControllersWeekMixin from '../../../mixins/controllers/week';
import { module, test } from 'qunit';

module('Unit | Mixin | controllers/week');

// Replace this with your real tests.
test('it works', function(assert) {
  var ControllersWeekObject = Ember.Object.extend(ControllersWeekMixin);
  var subject = ControllersWeekObject.create();
  assert.ok(subject);
});
