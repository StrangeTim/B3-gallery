B3.ArtworkRoute = Ember.Route.extend ({
  model: function(params) {
    return this.store.find('artwork', params.artwork_id);
  }
});
