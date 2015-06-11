B3.ArtistsRoute = Ember.Route.extend ({
  model: function(params) {
    return this.store.find('artist');
  }
});
