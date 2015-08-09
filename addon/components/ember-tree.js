import Ember from 'ember';
import layout from '../templates/components/ember-tree';

const {
  computed,
  run
} = Ember;

export default Ember.Component.extend({
  layout: layout,
  tagName: 'ul',
  classNames: ['ember-tree'],

  childrenKey: 'children',
  eagerCreate: true,
  expandEvent: 'click',
  showRest: false,
  isExpanded: computed.alias('node.isExpanded'),
  showOtherTextFmt: 'Show Other %@',
  sjowOnly: false,

  didInsertElement(){
    const $areaExpand = Ember.$(this.$().find('.ember-tree-node-trigger-expand')[0]);
    const expandEvent = this.get('expandEvent');

    if (!$areaExpand){
      console.warn("your tree component won't be expandable unless you nest {{ember-tree/trigger-expand}} component in it");
      return;
    }

    this.set('$areaExpand', $areaExpand);
    $areaExpand.on(expandEvent, ()=>{
      run(()=>{
        this.sendAction('expandAction', this.get('node'), !this.get('isExpanded'));
      });
    });
  },

  willInsertElement(){
    const $areaExpand = this.get('$areaExpand');

    if ($areaExpand){
      $areaExpand.off(this.get('expandEvent'));
    }
  },

  children: computed('node', 'childrenKey', 'showOnly', function(){
    const key = this.get('childrenKey');
    const children = this.get('node')[key];

    if (!children){
      return [];
    }

    var showOnly = this.get('showOnly');
    showOnly = showOnly ? showOnly : children.length;
    return children.slice(0, showOnly);
  }),

  childrenRest: computed('node', 'childrenKey', 'showOnly', function(){
    const key = this.get('childrenKey');
    const showOnly = this.get('showOnly');
    const children = this.get('node')[key];

    if (!children){
      return [];
    }

    return children.slice(showOnly, children.length);
  }),

  showOtherText: computed('showOtherTextFmt', 'showOnly', 'childrenRest.length', function(){
    const showOnly = this.get('showOnly');
    const showOtherTextFmt = this.get('showOtherTextFmt');
    const numberLeft = this.get('childrenRest.length');

    if (!showOnly || !numberLeft){
      return '';
    }
    return Ember.String.fmt(showOtherTextFmt, numberLeft);
  }),

  hasRest: computed('showOnly', 'childrenRest.length', function(){
    return !!this.get('showOnly') && !!this.get('childrenRest.length');
  }),

  actions: {
    showOther(){
      this.toggleProperty('showRest');
    },

    expandChild(node, isExpanded){
      if (this.get('expandAction')){
        this.sendAction('expandAction', node, isExpanded);
      } else {
        Ember.set(node, 'isExpanded', isExpanded);
      }
    }
  }
});
