import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('/ember-tree', 'Integration | Component | ember tree', {
  integration: true
});

const fixtureTreeModel = {
  id: 1,
  label: 'Level',
  isExpanded: true,
  children: [
    {
      id: 2,
      label: 'Level1',
      children: []
    },
    {
      id: 3,
      label: 'Level1-2nd',
      children: [
        {
          id: 4,
          label: 'Level2',
          children: [
            {
              id: 5,
              label: 'Level3'
            }
          ]
        }
      ]
    }
  ]
};

test('call expandAction on inner node', function(assert){
  assert.expect(3);

  this.set('node', Ember.$.extend(true, {}, fixtureTreeModel));
  this.render(
    hbs`{{#ember-tree expandAction="expandActionHandler" node=node as |node isExpanded|}}{{#ember-tree/trigger-expand}}expand-{{node.id}}{{/ember-tree/trigger-expand}}{{node.label}}{{/ember-tree}}`
  );

  this.on('expandActionHandler', (node, obj)=>{
    assert.equal(node.label, 'Level1-2nd', 'correct node');
    assert.deepEqual(obj, { isExpanded: true }, 'is expanded');
  });

  const $tree = this.$();
  assert.ok($tree);
  $tree.find('span:contains("expand-3")').click();
});

test('showOnly property', function(assert){
  assert.expect(1);

  this.set('node', Ember.$.extend(true, {}, fixtureTreeModel));
  this.render(
    hbs`{{#ember-tree showOnly=1 node=node as |node isExpanded|}}{{#ember-tree/trigger-expand}}expand{{/ember-tree/trigger-expand}}{{node.label}}{{/ember-tree}}`
  );

  const $tree = this.$();
  window.tree = $tree;
  assert.equal($tree.find('li').size(), 3);
  $tree.find('a:contains("1")').click();
});

test('eagerCreate=true', function(assert){
  assert.expect(1);

  this.set('node', Ember.$.extend(true, {}, fixtureTreeModel));
  this.render(
    hbs`{{#ember-tree eagerCreate=true node=node as |node isExpanded|}}{{#ember-tree/trigger-expand}}expand{{/ember-tree/trigger-expand}}{{node.label}}{{/ember-tree}}`
  );

  const $tree = this.$();
  window.tree = $tree;
  assert.equal($tree.find('li').size(), 5);
  // TODO: add more asserts
  $tree.find('span:contains("expand-3")').click();
});
