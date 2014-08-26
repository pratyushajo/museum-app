import Ember from 'ember';

export default Ember.ArrayController.extend({
	play: function(gal){
		//Write script to break text into 100
		
		var audio = "http://translate.google.com/translate_tts?ie=UTF-8&q="+
					gal.get('title') +
					"&tl=en";

		var audioFile = new Audio(audio);
  		 audioFile.addEventListener('ended', function() {
  		 	var audio1 = "http://translate.google.com/translate_tts?ie=UTF-8&q="+gal.get('desc').slice(0,100)+"&tl=en";
			 var audioFile1 = new Audio(audio1);
				audioFile1.play();
				// alert("test");
				// console.log("testing");
			 
  		 });
		audioFile.play();
	},
	actions: {
		addFavorites: function(id){
				var store = this.store;
				var galleryChild = this.get('content').objectAt(id-1); //.content[id-1];
				//debugger;
				//console.log(galleryChild.get('title'));
				
				var favorite = store.createRecord('favorite');
				 favorite.get('gallery').then(function(gal){
					 gal.pushObject(galleryChild);
				 });
			
			
				favorite.save().then(function(){
					console.log("Record saved in database");
				});	
			}
	}
});