import Ember from 'ember';
import HalSerializer from "ember-data-hal-9000/serializer";

// problem is HALSerialize uses JSONApiSerializer, not JSONSerializer
export default HalSerializer.extend({
  isNewSerializerAPI: true,

  serializeIntoHash: function(hash, type, record, options) {
    Ember.merge(hash, this.serialize(record, options));
  }

});
