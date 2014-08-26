import Ember from 'ember';

export default Ember.Route.extend({
 model: function(params) {
		var art =[];
		return this.store.find('artwork').then(function(a){
			//debugger;
			var content = a.content;
			for(var i=0; i<content.length;i++){
				if(content.objectAt(i).get('galleryId') == params.galleryId){
					//debugger;
					art.pushObject(content.objectAt(i));
				}
			}
			return art;
		});
	  
 	}
 
});