import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-tree', 'Integration | Component | ember tree', {
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

const { copy } = Ember;

test('call expandAction on inner node', function(assert){
  assert.expect(3);

  this.set('node', copy(fixtureTreeModel, true));
  this.render(
    hbs`{{#ember-tree expandAction="expandActionHandler" node=node as |node isExpanded|}}{{#ember-tree/trigger-expand}}expand-{{node.id}}{{/ember-tree/trigger-expand}}{{node.label}}{{/ember-tree}}`
  );

  this.on('expandActionHandler', (node, isExpanded)=>{
    assert.equal(node.label, 'Level1-2nd', 'correct node');
    assert.equal(isExpanded, true, 'is expanded');
  });

  const $tree = this.$();
  assert.ok($tree);
  $tree.find('span:contains("expand-3")').click();
});

test('showOnly property', function(assert){
  assert.expect(2);

  this.set('node', copy(fixtureTreeModel, true));
  this.render(
    hbs`{{#ember-tree showOnly=1 showOtherTextFmt="rest %@" node=node as |node isExpanded|}}{{#ember-tree/trigger-expand}}expand{{/ember-tree/trigger-expand}}{{node.label}}{{/ember-tree}}`
  );

  const $tree = this.$();
  assert.equal($tree.find('.other-children.hidden').size(), 1);
  $tree.find('a:contains("rest 1")').click();
  assert.equal($tree.find('.other-children.hidden').size(), 0);
});

test('eagerCreate=true, expand subtree', function(assert){
  assert.expect(2);

  this.set('node', copy(fixtureTreeModel, true));
  this.render(
    hbs`{{#ember-tree eagerCreate=true node=node as |node isExpanded|}}{{#ember-tree/trigger-expand}}expand{{/ember-tree/trigger-expand}}{{node.label}}{{/ember-tree}}`
  );

  const $tree = this.$();
  assert.equal($tree.find('li').size(), 5, 'total number of nodes');
  assert.equal($tree.find('.hidden').size(), 4, 'all children hidden except first');
  // FIXME: fails on phantom
  // $tree.find('span:contains("expand")')[2].click();
  // assert.equal($tree.find('.hidden').size(), 3);
});

test('eagerCreate=false', function(assert){
  assert.expect(1);

  const treeHead = copy(fixtureTreeModel, true);
  treeHead.isExpanded = false;
  this.set('node', treeHead);
  this.render(
    hbs`{{#ember-tree eagerCreate=false node=node as |node isExpanded|}}{{#ember-tree/trigger-expand}}expand{{/ember-tree/trigger-expand}}{{node.label}}{{/ember-tree}}`
  );

  const $tree = this.$();
  assert.equal($tree.find('li').size(), 1);
  $tree.find('span:contains("expand-3")').click();
});
