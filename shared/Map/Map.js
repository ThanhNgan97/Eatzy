
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import fonts from '../../constants/fonts';
import DynamicIcon from '../Icons/DynamicIcon';

const Map = ({
  mini = false,
  onLocationReady = () => {},
  onRegionChangeComplete = () => {},
  showMyLocationButton = false,
}) => {
  const mapRef = useRef(null);
  const [region, setRegion] = useState(null);
  const [myLocation, setMyLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Bạn cần cấp quyền vị trí để sử dụng bản đồ.');
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

      onLocationReady({ latitude, longitude });

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

  const handleRegionChangeComplete = (region) => {
    onRegionChangeComplete({
      latitude: region.latitude,
      longitude: region.longitude,
    });
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
        ref={mapRef}
        style={styles.map}
        region={region}
        showsUserLocation={true}
        showsMyLocationButton={false}
        scrollEnabled={!mini}
        zoomEnabled={!mini}
        rotateEnabled={!mini}
        pitchEnabled={!mini}
        onRegionChangeComplete={handleRegionChangeComplete}
      />

      <View style={styles.centerMarker}>
        <Image
          source={require('../../assets/images/avatar.png')}
          style={styles.avatarImage}
        />
      </View>

      {!mini && showMyLocationButton && (
        <View style={styles.floatingButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={focusToMyLocation}>
            <View style={styles.buttonRow}>
              <DynamicIcon
                type="Fontisto"
                name="map-marker-alt"
                size={15}
                color="#fff"
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
  container: { flex: 1 },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: { flex: 1 },
  centerMarker: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -20,
    marginTop: -40,
    zIndex: 10,
  },
  avatarImage: {
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 2.5,
    borderColor: '#68BD6C',
  },
  floatingButtonContainer: {
    position: 'absolute',
    top: '35%',
    left: '60%',
    transform: [{ translateX: -100 }],
    zIndex: 999,
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
    fontFamily: fonts.HelveticaNeueBold,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Map;
