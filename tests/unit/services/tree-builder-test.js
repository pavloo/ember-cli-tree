import { moduleFor, test } from 'ember-qunit';

moduleFor('service:tree-builder', 'Unit | Service | tree builder', {
  needs: []
});

test('returns empty object if nothing passed', function(assert) {
  var service = this.subject();

  assert.deepEqual(service.build(), {}, 'empty tree root');
});

test('returns empty object if no records passed', function(assert) {
  var service = this.subject();

  assert.deepEqual(service.build([]), {}, 'empty tree root');
});
