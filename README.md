# Ember-cli-tree

Simple tree UI component for Ember. No JQuery. Pure handlebars and recursion.

# Installation

```
ember install ember-cli-tree
```

# Usage

The only thing you need to care of is how your tree node looks like.
Here is the example tree to be rendered:

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

* **childrenKey** - _String_, the key of children attribute in tree node object
(_Default_: 'children')
* **expandEvent** - _String_, event, which causes expanding of node when
triggered on _ember-tree/trigger-expand_ component
(_Default_: 'click')
* **showOnly** - _Number_, the number of node's children shown by default
(_Default_: undefined)
* **showOnlyText** - _String_, if _showOnly_ is set, the value of this property
is the value of link text, clicking on which makes the rest of the children to
be show
(_Default_: 'Show Other _number-of-hidden-children_')

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
