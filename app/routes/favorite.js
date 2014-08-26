import Ember from 'ember';

export default Ember.Route.extend({
 model: function() {
	 var store = this.store;
     return store.find('gallery').then(function(gal){
		 debugger;
		 return store.filter('gallery', {isFavorite: true});
     })
	 //, {isFavorite: true}
 }
});