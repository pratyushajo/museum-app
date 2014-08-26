import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
     // return this.store.find('gallery');
     		var gal =[];
		return this.store.find('gallery').then(function(a){
			//debugger;

			var content = a.content;
			for(var i=0; i<content.length;i++){			
			// var lat = Math.random()/1000 + 37.414287;
			// var lon = Math.random()/1000 - 122.077409;
			var lat = content.objectAt(i).get('lat');
			var lon = content.objectAt(i).get('lng');
				var agallery = 
				{
			      location: L.latLng(lat, lon),
			      title: content.objectAt(i).get('title')
				};
					// content.objectAt(i)
				gal.pushObject(agallery);
			}
			return gal;
		});

	},
	 setupController: function(controller, model){
	 controller.set('content', model);
	 //this.controllerFor('favorite').set('model', this.store.find('favorite'));
 }

});
