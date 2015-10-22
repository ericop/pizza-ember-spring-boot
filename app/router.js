import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('pizzas', function() {});
  this.route('menu', { path: '/'});
  this.route('new-pizza');
  this.route('pizza', { path: 'pizzas/:pizza_id'});
});

export default Router;
