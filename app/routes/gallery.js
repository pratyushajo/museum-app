import Ember from 'ember';

export default Ember.Route.extend({
 model: function() {

     return this.store.find('gallery');
 } ,
 setupController: function(controller, model){
	 controller.set('content', model);
	 //this.controllerFor('favorite').set('model', this.store.find('favorite'));
 }
});

