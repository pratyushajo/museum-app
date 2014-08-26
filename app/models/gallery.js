import DS from 'ember-data';

var Gallery = DS.Model.extend({
    title: DS.attr('string'),
    img: DS.attr('string'),
    lng: DS.attr('number'),
    lat: DS.attr('number'),
	desc: DS.attr('string')
});

export default Gallery;