import Ember from 'ember';

const {
  get
} = Ember;

export default Ember.Service.extend({

  build(records, attrs = []){
    const hash = {};
    var treeRoot = {};

    if (!records || !get(records, 'length')){
      return treeRoot;
    }

    records.forEach((record)=>{
      hash[record.id] = record.getProperties(['id'].concat(attrs));
      hash[record.id]['children'] = [];
    });

    let parentId;
    records.forEach((record)=>{
      parentId = get(record, 'parent.id');
      let node = hash[record.id];
      if (!parentId){
        treeRoot = node;
      } else {
        hash[parentId]['children'].push(node);
      }
    });
    return treeRoot;
  }

});
