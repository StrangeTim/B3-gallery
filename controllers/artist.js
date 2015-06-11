B3.ArtistController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.get('model').save();
      this.set('isEditing', false);
    },
    delete: function() {
      if(confirm('Are you sure you want to remove this artist?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('artists');
      }
    }
  }
});
