import DS from 'ember-data';

export default DS.Model.extend({
    player:    DS.attr('string'),
    isDrawing: DS.attr('boolean'),
    label:     DS.attr('string'),
    drawing:   DS.belongsTo('drawing/image'),
    turn:      DS.belongsTo('turn')
});
