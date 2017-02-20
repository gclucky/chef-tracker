import Ember from 'ember';

export default Ember.Controller.extend({
  newItem: null,
  availableNow: Ember.computed.filterBy('model','cooking', true),
  eachStudent: Ember.computed.mapBy('model', 'student'),
  totalStudents: Ember.computed.sum('eachStudent'),


  actions: {
    isAvailable(chef) {
      Ember.set(chef, 'cooking', true);
      chef.save();
    },
    isNotavailable(chef){
      Ember.set(chef, 'cooking', false);
      chef.save();
    },
    saveNewItem() {
      this.store.createRecord('chef', {
        cooking: false,
        name: this.get('newItem')
      }).save()
      this.set('newItem', '')
    },
    fireChef(chef){
      chef.destroyRecord();
    },
    incrementStudent(chef)  {
      chef.incrementProperty('student');
      chef.save();
    },
    decrementStudent(chef)  {
        if (chef.get('student') > 0) {
          chef.decrementProperty('student');
          chef.save();
        }
      }
  }
});
