import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.find('group');
  },

  treeBuilder: Ember.inject.service('tree-builder'),

  actions: {
    buildTree(){
      const treeBuilder = this.get('treeBuilder');
      const treeStructure = treeBuilder.build(this.controller.get('model'), ['name']);
      this.controller.set('treeObj', JSON.stringify(treeStructure));
    }
  }
});
