B3.NewArtistController = Ember.Controller.extend ({
  actions: {
    save: function() {
      var newArtist = this.store.createRecord('artist', {
        artistName: this.get('artistName'),
        bio: this.get('bio'),
        artistImageURL: this.get('artistImageURL'),
        imageURL: this.get('imageURL')
      });

      newArtist.save();
      this.setProperties({artistName: " ", bio: " ", artistImageURL: " ", imageURL: " "});
      this.transitionToRoute('artists');
    }
  }
});
