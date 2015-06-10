B3.NewArtworkController = Ember.Controller.extend ({
  actions: {
    save: function() {
      var newArtwork = this.store.createRecord('item', {
        artworkName: this.get('itemName'),
        description: this.get('description'),
        owner: this.get('owner'),
        age: this.get('age'),
        imageURL: this.get('imageURL')
      });
      newArtwork.save();
      // var bidNumber = this.id;
      // newArtwork({bidNumber: bidNumber});
      this.setProperties({artworkName: " ", description: " ", owner: " ", age: " ", imageURL: " "});
      this.transitionToRoute('artworks');
    }
  }
});
