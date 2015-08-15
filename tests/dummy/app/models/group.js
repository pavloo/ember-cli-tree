import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  parent: DS.belongsTo('group', { inverse: 'children' }),
  children: DS.hasMany('group', { inverse: 'parent' })
});
