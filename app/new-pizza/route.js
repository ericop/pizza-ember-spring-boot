import Ember from 'ember';

export default Ember.Route.extend({
    model () {
        return this.store.createRecord('pizza', { toppings: []});
    },
  removeOldModel: function() {
    console.log('model to toss', this.controller.get('model'));
    if (this.controller.get('model.id') == null) {
      this.controller.get('model').deleteRecord();
    }
  }.on('deactivate')
});
