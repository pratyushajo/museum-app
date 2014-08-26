import Ember from 'ember';

var Router = Ember.Router.extend({
  location: MyNewAppENV.locationType
});

Router.map(function() {
  this.route('gallery');
  this.route('artwork', {'path' : '/gallery/:galleryId'});
  this.route('allartwork');
  this.route('registration', {'path': '/'});
  this.route('map');
  this.route('about');
  this.route('favorite');
  this.route('help');
});

export default Router;
