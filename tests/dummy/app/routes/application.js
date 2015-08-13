import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.find('groups');
  },

  treeBuilder: Ember.inject.service('tree-builder'),

  actions: {
    buildTree(){
      const treeBuilder = this.get('treeBuilder');
      const treeStructure = treeBuilder.build(this.get('model'));

      this.set('tree', JSON.stringify(treeStructure));
    }
  }
});
