B3.ArtistRoute = Ember.Route.extend ({
  model: function(params) {
    return this.store.find('artist', params.artist_id);
  }
});
