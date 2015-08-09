import Ember from 'ember';
import layout from '../../templates/components/ember-tree/trigger-expand';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['ember-tree-node-trigger-expand'],
  tagName: 'span'
});
