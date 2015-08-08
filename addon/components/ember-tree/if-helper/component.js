import Ember from 'ember';
import layout from './template';

const { computed } = Ember;

export default Ember.Component.extend({
  layout: layout,

  // to suppress the warning
  // http://emberjs.com/deprecations/v1.x/#toc_binding-style-attributes
  contentStyle: computed('flag', function(){
    if (!this.get('flag')){
      return new Ember.Handlebars.SafeString('display: none;');
    } else {
      return new Ember.Handlebars.SafeString();
    }
  })
});
