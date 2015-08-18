import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  parent: DS.belongsTo('group', { async: false, inverse: 'children' }),
  children: DS.hasMany('group', { async: false, inverse: 'parent' })
});
