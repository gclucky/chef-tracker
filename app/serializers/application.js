import DS from 'ember-data';
import Ember from 'ember';

const { String: { singularize, capitalize } } = Ember;

export default DS.JSONAPISerializer.extend({
  payloadKeyFromModelName(modelName) {
    return singularize(capitalize(modelName));
  }
});
