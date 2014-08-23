import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
	firebase: new Firebase("https://popping-fire-5325.firebaseio.com/")
});
