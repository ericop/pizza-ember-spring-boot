import Ember from 'ember';

export default Ember.Route.extend({
  route (params) {
    return this.store.findRecord('pizza', params.pizza_id)
  }
});
