B3.Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('artworks');
  this.resource('artwork', {path: 'artworks/:artwork_id'});
  this.resource('about');
  this.resource('newArtist');
  this.resource('artists');
  this.resource('artist',  {path: 'artists/:artist_id'}, function() {
    this.resource('newArtwork');
  });
});
