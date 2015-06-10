B3.ArtworksRoute = Ember.Route.extend ({
  model: function(params) {
    return this.store.find('artwork');
  }
});
