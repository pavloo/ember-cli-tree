import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['ember-tree-node-trigger-expand'],
  tagName: 'span'
});
