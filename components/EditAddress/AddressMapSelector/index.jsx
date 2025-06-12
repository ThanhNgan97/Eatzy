import React, { useEffect, useState, useRef } from 'react';
import { View, Text, PermissionsAndroid, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import styles from './AddressMapSelector.style'

Geocoder.init('YOUR_GOOGLE_MAPS_API_KEY', { language: 'vi' }); 

const AddressMapSelector = () => {
  const [region, setRegion] = useState(null);
  const [address, setAddress] = useState('');
  const mapRef = useRef(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.warn('Permission denied');
          return;
        }
      }
      Geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          const initialRegion = {
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          };
          setRegion(initialRegion);
          fetchAddressFromCoords(latitude, longitude);
        },
        error => console.error(error),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    };

    requestLocationPermission();
  }, []);

  const fetchAddressFromCoords = async (lat, lng) => {
    try {
      const json = await Geocoder.from(lat, lng);
      const formattedAddress = json.results[0]?.formatted_address || '';
      setAddress(formattedAddress);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRegionChangeComplete = region => {
    setRegion(region);
    fetchAddressFromCoords(region.latitude, region.longitude);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tên đường, Tòa nhà, Số nhà.</Text>
      <Text style={styles.address}>{address || 'Đang tìm địa chỉ...'}</Text>

      {region && (
        <MapView
          ref={mapRef}
          style={styles.map}
          region={region}
          onRegionChangeComplete={handleRegionChangeComplete}
        >
          <Marker coordinate={region} />
        </MapView>
      )}
    </View>
  );
};

export default AddressMapSelector;
