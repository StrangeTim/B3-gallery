B3.Artwork = DS.Model.extend({
  artworkName: DS.attr(),
  description: DS.attr(),
  artworkImageURL: DS.attr(),
  artist: DS.belongsTo('artist', {async: true})
});
