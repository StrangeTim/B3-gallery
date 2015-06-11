B3.Artist = DS.Model.extend({
  artistName: DS.attr(),
  bio: DS.attr(),
  imageURL: DS.attr(),
  artistImageURL: DS.attr(),
  artworks: DS.hasMany('artwork', {async: true})
});
