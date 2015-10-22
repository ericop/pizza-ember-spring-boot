import Ember from 'ember';

export default Ember.Controller.extend({
  toppings: ["ham", "pepperoni", "bacon", "sausage",
       "peppers", "onions",
       "extra cheese", "extra sauce", "vegan crust"],
  actions: {
    saveOrder () {
      var that = this;

      this.get('model').save()
        .then( function (model) {
          that.transitionTo('pizza', model.get('id'));
        });
    }
  }

});
