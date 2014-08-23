import Ember from 'ember';

export default Ember.Route.extend({
 model: function() {
	 //debugger;
     return this.store.find('favorite').then(function(fav) {
		 // var ret = [];
// 		 //var content = fav.get('content');
// 		 //debugger;
// 		 for(var i = 0; i<fav.length;i++){
// 			 ret.push(fav[i].get('gallery'));
// 		 }
// 		 return ret;
		 
 	 	return fav.getEach('gallery');
		//alert(fav.get('gallery'));
		});
 }
});