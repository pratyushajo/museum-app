import DS from 'ember-data';

export default DS.Model.extend({
    email: DS.attr('string'),
    zip: DS.attr('string'),
    dob: DS.attr('string'),
    gender: DS.attr('string'),
    newsletter: DS.attr('boolean')
});
