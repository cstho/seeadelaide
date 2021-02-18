import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import MapView, {Polyline, Marker, PROVIDER_GOOGLE, Callout} from 'react-native-maps';
import { images, icons, COLORS, SIZES } from '../constants';
import * as Location from 'expo-location';
import { data } from '../constants/data';
import { getDistance, getPreciseDistance } from 'geolib';

const Map = (props) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let currentLatitude = '';
  let currentLongitude = '';

  if (location) {
    currentLatitude = (location.coords.latitude);
    currentLongitude = (location.coords.latitude);
  }

  const dist = getDistance(
    { latitude: props.latitude,longitude: props.longitude},
    { latitude: currentLatitude, longitude: currentLongitude }
  );
  console.log(dist);
  console.log(props) ;
  console.log(currentLatitude);
  console.log(currentLongitude);
    return (
      <View style={styles.container}>
      <MapView
        style={styles.map}
        // To show default Google marker for current location
        showsUserLocation = {false}
        showsMyLocationButton = {false}
        followUserLocation={true}
        zoomEnabled={true}
        initialRegion={{
          latitude: props.latitude,
          longitude: props.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        provider={PROVIDER_GOOGLE}>
        <Marker
        coordinate={{latitude: props.latitude,longitude: props.longitude}}
        title={"Glenelg"}
        description={'Distance\n\n'+ (dist/ 1000) +' KM from current location'}
        >
        <Image
          source={icons.mapPin}
          resizeMode="cover"
          style={{
            width: 20,
            height: 20,
          }}
          />
      </Marker>
      <Marker
        coordinate={{latitude: currentLatitude,longitude: currentLongitude}}
        title={"You are here"}
        // description={"Description?"}
        >
        <Image
          source={icons.mapPin}
          resizeMode="cover"
          style={{
            width: 20,
            height: 20,
          }}
          />
      </Marker>
      </MapView>
      </View>
    );
  }

export default Map ;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width*0.9,
    height: Dimensions.get('window').height*0.3,
  }
});