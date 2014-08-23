import Ember from 'ember';

export default Ember.Controller.extend({
	isExpanded: true,
	actions: {
		menu: function (){
			// debugger;
			var notExpanded = !this.isExpanded;
			return this.set('isExpanded', notExpanded);
		}
	}
});
