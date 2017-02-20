import DS from 'ember-data';

export default DS.Model.extend({
 name: DS.attr('string'),
 cooking: DS.attr('boolean'),
 student: DS.attr('number')
});
