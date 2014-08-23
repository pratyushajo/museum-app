import DS from 'ember-data';

var Artwork = DS.Model.extend({
    title: DS.attr('string'),
	galleryId: DS.attr('number'),
    img: DS.attr('string'),
	desc: DS.attr('string'),
	date: DS.attr('date'),
	copyrightOwner: DS.attr('string'),
	source: DS.attr('string')
});

//      Artwork.reopenClass({
//      	//include

// 	FIXTURES: [

//     ]
// });

export default Artwork;