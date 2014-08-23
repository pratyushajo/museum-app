// import Ember from 'ember';

export default EmberLeaflet.MapView.extend({
  childLayers: [
      EmberLeaflet.DefaultTileLayer,
      MyNewAppENV.MarkerCollectionLayer]
});