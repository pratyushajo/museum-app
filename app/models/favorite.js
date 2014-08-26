import DS from 'ember-data';

var Favorite = DS.Model.extend({
	gallery: DS.attr('')
});

export default Favorite;