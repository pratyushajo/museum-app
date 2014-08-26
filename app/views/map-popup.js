import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'em',
  template: Ember.Handlebars.compile('I am the template')
});
