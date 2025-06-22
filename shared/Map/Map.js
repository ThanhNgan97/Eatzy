import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import CustomMarker from './CustomMarker';
import fonts from '../../constants/fonts';
import DynamicIcon from '../Icons/DynamicIcon';

const MapScreen = ({ mini = false }) => {
  const mapRef = useRef(null);

  const [region, setRegion] = useState(null);
  const [myLocation, setMyLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Bạn cần cấp quyền vị trí để sử dụng chức năng này.');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      const newRegion = {
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };

      setMyLocation({ latitude, longitude });
      setRegion(newRegion);
      setLoading(false);

      if (!mini) {
        mapRef.current?.animateToRegion(newRegion, 1000);
      }
    })();
  }, []);

  const focusToMyLocation = () => {
    if (myLocation) {
      const newRegion = {
        ...myLocation,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      mapRef.current?.animateToRegion(newRegion, 1000);
    }
  };

  if (loading || !region) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#68BD6C" />
        <Text style={{ marginTop: 10 }}>Đang lấy vị trí...</Text>
      </View>
    );
  }

return (
  <View style={styles.container}>
    <MapView
      style={styles.map}
      region={region}
      ref={mapRef}
      showsUserLocation={true}
      showsMyLocationButton={false}
      scrollEnabled={!mini}
      zoomEnabled={!mini}
      rotateEnabled={!mini}
      pitchEnabled={!mini}
    >
      {myLocation && (
        <CustomMarker
          coordinate={myLocation}
          title="Vị trí của tôi"
          image={require('../../assets/images/avatar.png')}
        />
      )}
    </MapView>

    {!mini && (
      <View style={styles.floatingButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={focusToMyLocation}>
            <View style={styles.buttonRow}>
                <DynamicIcon 
                    type="Fontisto" 
                    name="map-marker-alt" 
                    size={15} color="#fff" 
                    />
                <Text style={styles.buttonText}>My Location</Text>
            </View>
        </TouchableOpacity>
      </View>
    )}
  </View>
);

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1, 
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#68BD6C',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily:fonts.HelveticaNeueBold
  },

  floatingButtonContainer: {
    position: 'absolute',
    top: '35%', 
    left: '60%',
    transform: [{ translateX: -100 }], 
    zIndex: 999,
},

buttonRow:{
    flexDirection:'row',
    gap:5,
    justifyContent:'center',
    alignItems:'center'
}

});

export default MapScreen;
