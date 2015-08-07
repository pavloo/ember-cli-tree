import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,

  init(){
    this._super();
    // to suppress the warning
    // http://emberjs.com/deprecations/v1.x/#toc_binding-style-attributes
    this.set('displayNone', new Ember.Handlebars.SafeString('display: none;'));
  }
});
