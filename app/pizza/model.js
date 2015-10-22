import DS from 'ember-data';

export default DS.Model.extend({
  size: DS.attr('number', {default: 8}),
  // toppings is an array of strings
  toppings: DS.attr()
});
