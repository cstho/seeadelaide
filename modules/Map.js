import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions } from 'react-native';
import MapView, {Polyline, Marker, PROVIDER_GOOGLE, Callout} from 'react-native-maps';
import * as Location from 'expo-location';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      markers: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -34.921230,
          longitude: 138.599503,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        provider={PROVIDER_GOOGLE}
      />
      <Marker>
      <View style={{backgroundColor: "red", padding: 10}}>
        <Text>SF</Text>
        </View>
        </Marker>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});