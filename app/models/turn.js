import DS from 'ember-data';

export default DS.Model.extend({
    player:    DS.attr('string'),
    label:     DS.attr('string'),
    drawing:   DS.belongsTo('drawing/image'),
    turn:      DS.belongsTo('turn'),
    isDrawing: function() {
        return (this.get('drawing') !== null);
    }.property('drawing', 'label')
});
