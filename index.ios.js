'use strict';

var React = require('react-native');
var MapboxGLMap = require('react-native-mapbox-gl');
var mapRef = [];

var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  StatusBarIOS,
} = React;

var map = React.createClass({
  mixins: [MapboxGLMap.Mixin],
  getInitialState() {
    return {
      mapLocation: {
        latitude: 0,
        longitude: 0
       },
        center: {
          latitude: 47.59907722583646,
          longitude: -122.33312308788298
        },
        zoom: 11,
        direction: 0,
        annotations: [{
          latitude: 47.59907722583646,
          longitude:  -122.33312308788298,
          title: 'Zeitgeist Coffee',
       },{
          latitude: 47.63517269198647,
          longitude:  -122.3572200536728,
          title: 'El Diablo Coffee'
       },
       {
          latitude: 47.61405071987257,
          longitude:  -122.32813417911531,
          title: 'Starbucks Reserve'
       }, 
       {
          latitude: 47.62166421850536,
          longitude:  -122.32112288475038,
          title: 'Vivace Sidewalk Cafe'
       },  
       ]
     }
  },
  _onChange(e) {
    this.setState({ currentZoom: e.zoom });
  },
  onUpdateUserLocation(location) {
    console.log(location)
  },
  onOpenAnnotation(annotation) {
    console.log(annotation)
  },
  render: function() {
    StatusBarIOS.setHidden(true);
    return (
      <View style={styles.container}>
       <Text>
         Coffee Finder
       </Text>
       <Text style={styles.text} onPress={() => this.setCenterCoordinateZoomLevelAnimated(mapRef, 47.62166421850536, -122.32112288475038, 14)}>
        Vivace Sidewalk Cafe
      </Text>
      <Text style={styles.text} onPress={() => this.setCenterCoordinateZoomLevelAnimated(mapRef, 47.63517269198647, -122.3572200536728, 14)}>
        El Diablo    
      </Text>
      <Text style={styles.text} onPress={() => this.setCenterCoordinateZoomLevelAnimated(mapRef, 47.61405071987257, -122.32813417911531, 14)}>
        Starbucks Reserve      
      </Text>
      <Text style={styles.text} onPress={() => this.setCenterCoordinateZoomLevelAnimated(mapRef, 47.59907722583646, -122.33312308788298, 14)}>
        Zeitgeist Coffee 
      </Text>
      <MapboxGLMap
        style={styles.map}
        direction={10}
        rotateEnabled={true}
        showsUserLocation={true}
        ref={mapRef}
        accessToken={'pk.eyJ1Ijoicm9ubmllYnJvd24iLCJhIjoiMzc4NjkzZGU4NjM3Y2M0MWQ4MTAxNjkzYTI4MjZkYmIifQ.Nlwl-yg8rC5c0SxjMt0few'}
        styleURL={'asset://styles/emerald-v7.json'}
        centerCoordinate={this.state.center}
        userLocationVisible={true}
        zoomLevel={this.state.zoom}
        onRegionChange={this.onChange}
        annotations={this.state.annotations}
        onOpenAnnotation={this.onOpenAnnotation}
        onUpdateUserLocation={this.onUpdateUserLocation}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  },
  map: {
    flex:5,
  },
  text: {
    padding: 2
  }
});

AppRegistry.registerComponent('coffeeS', () => map);
