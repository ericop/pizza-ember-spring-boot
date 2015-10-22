import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://localhost:4201',
    shouldReturnAll: true
});
