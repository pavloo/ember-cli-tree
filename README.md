# Ember-cli-tree

Simple tree UI component for Ember. No JQuery. Pure handlebars and recursion.

# Installation

```
ember install ember-cli-tree
```

# Usage

The only thing you need to care of is how your single tree node looks like.
Here is an example tree object:

```javascript
const treeHead = {
  label: '1',
  children: [
    {
      label: '2'
    },
    {
      label: '2',
      children: [
        {
          label: 3
        }
      ]
    }
  ]
}
```
Simple usage:
```handlebars
{{#ember-tree node=treeHead as |node isExpanded|}}
  {{#ember-tree/trigger-expand}}
    {{#if isExpanded}}
      -
    {{else}}
      +
    {{/if}}
  {{/ember-tree/trigger-expand}}
  {{node.label}}
{{/ember-tree}}
```

## Component's API
* **eagerCreate** - _boolean_, determines, how tree is rendered:
  1. if set to _true_, the whole tree is placed into DOM upon component's
insertion (show/hide is implemented via _display: none_)
  2. if set to _false_, every node is inserted individually _lazily_ upon
parent's node expansion (show/hide is implemented via _if_ helper)
(_Default_: true)
* **childrenKey** - _String_, the key of children attribute in tree node object
(_Default_: 'children')
* **expandEvent** - _String_, event, which causes expanding of node when
triggered on _ember-tree/trigger-expand_ component
(_Default_: 'click')
* **showOnly** - _Number_, the number of node's children shown by default
(_Default_: undefined)
* **showOtherTextFmt** - _String_ (format string, see
[Ember.String.fmt](http://emberjs.com/api/classes/Ember.String.html#method_fmt)
for details), if _showOnly_ is set, the value of this property is the value of
link text, clicking on which makes hidden children to be shown, where 1st
format parameter - # of children _left_
(_Default_: 'Show Other %@')
* **expandAction** - _String_, name of an action, which handles expansion of
sub trees on top level. If defined,
_node.isExpanded_ have to be manually set, e. g.

```javascript
...
expandActionHander(node, isExpanded){
  // some custom handling, then
  Ember.set(node, 'isExpanded', isExpanded);
}
...

```

# TODO list:
* add drag and drop

# Contribution

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
