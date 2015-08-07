# Ember-cli-tree

Simple tree UI component for Ember. No JQuery. Pure handlebars and recursion.

# Installation

```
ember install ember-cli-tree
```

# Usage

The only thing you need to care of is how your tree node looks like.
Simple example of rendering a tree:

```javascript
{
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
{{#ember-tree node=node as |node isExpanded|}}
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
The next tree will be rendered:

*TODO*: picture or gif here

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
