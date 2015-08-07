import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'ul',
  classNames: ['ember-tree'],

  childrenKey: 'children',
  eagerCreate: false,
  expandEvent: 'click',
  showRest: false,
  isExpanded: Ember.computed.alias('node.isExpanded'),

  init(){
    this._super();
    this.setProperties({
      showOnly: this.get('showOnly'),
      // to suppress the warning
      // http://emberjs.com/deprecations/v1.x/#toc_binding-style-attributes
      displayNone: new Ember.Handlebars.SafeString('display: none;')
    });
  },

  didInsertElement(){
    const $areaExpand = Ember.$(this.$().find('.ember-tree-node-trigger-expand')[0]);
    const expandEvent = this.get('expandEvent');

    if (!$areaExpand){
      console.warn("your tree component won't be expandable unless you nest {{ember-tree/trigger-expand}} component in it");
      return;
    }

    this.set('$areaExpand', $areaExpand);
    $areaExpand.on(expandEvent, ()=>{
      Ember.run(()=>{
        this.toggleProperty('isExpanded');
        this.sendAction('expandAction', this.get('node'), { isExpanded: this.get('isExpanded') });
      });
    });
  },

  willInsertElement(){
    const $areaExpand = this.get('$areaExpand');

    if ($areaExpand){
      $areaExpand.off(this.get('expandEvent'));
    }
  },

  children: Ember.computed('node', 'childrenKey', 'showOnly', function(){
    const key = this.get('childrenKey');
    const children = this.get('node')[key];

    if (!children){
      return [];
    }

    var showOnly = this.get('showOnly');
    showOnly = showOnly ? showOnly : children.length;
    return children.slice(0, showOnly);
  }),

  childrenRest: Ember.computed('node', 'childrenKey', 'showOnly', function(){
    const key = this.get('childrenKey');
    const showOnly = this.get('showOnly');
    const children = this.get('node')[key];

    if (!children){
      return [];
    }

    return children.slice(showOnly, children.length);
  }),

  actions: {
    showOther(){
      this.toggleProperty('showRest');
    },

    expandChild(node, obj){
      this.sendAction('expandAction', node, obj);
    }
  }
});
