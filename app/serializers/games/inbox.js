import ApplicationSerializer from 'pifuxelck-ember/serializers/application';
import Ember from 'ember';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  primaryKey: "game_id",
  attrs: {
    previousTurn: { embedded: 'always' }
  },
  typeForRoot: function() {
    return this._super('games/inbox');
  },
  normalizePayload: function(payload) {
    // Generate a unique ID for each turn model returned
    payload.inbox_entries.forEach(function(entry) {
      entry.previous_turn.id = Ember.guidFor(entry.previous_turn);
    });
    return payload;
  }
});
