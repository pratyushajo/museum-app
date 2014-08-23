import DS from 'ember-data';

var Favorite = DS.Model.extend({
	gallery: DS.hasMany('gallery', {async: true})
});

export default Favorite;