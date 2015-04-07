import DS from 'ember-data';

export default DS.Model.extend({
  previousTurn: DS.belongsTo('turn')
});
