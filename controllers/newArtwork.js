B3.NewArtworkController = Ember.Controller.extend ({
  needs: ['artist'],
  actions: {
    save: function() {
      var newArtwork = this.store.createRecord('artwork', {
        artworkName: this.get('artworkName'),
        description: this.get('description'),
        artworkImageURL: this.get('artworkImageURL')
      });
      newArtwork.save();

      var artist = this.get('controllers.artist.model');
      artist.get('artworks').pushObject(newArtwork);
      artist.save();

      this.setProperties({artworkName: " ", description: " ", artworkImageURL: " "});
      this.transitionToRoute('artist', artist.id);
    }
  }
});
