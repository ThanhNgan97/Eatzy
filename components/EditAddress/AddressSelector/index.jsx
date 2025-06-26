import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import styles from './AddressSelector.style';
import Map from '../../../shared/Map/Map';

const AddressSelector = ({ province, district, ward, isExpanded }) => {
  const navigation = useNavigation();
  const [addressText, setAddressText] = useState('Đang lấy địa chỉ...');
  const [coords, setCoords] = useState(null);

  const getCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setAddressText('Không được cấp quyền vị trí');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      const position = { latitude, longitude };
      setCoords(position);
      fetchAddressFromCoords(position);
    } catch (error) {
      console.log('Lỗi vị trí:', error);
      setAddressText('Không thể lấy vị trí');
    }
  };

  const fetchAddressFromCoords = async ({ latitude, longitude }) => {
    try {
      const [place] = await Location.reverseGeocodeAsync({ latitude, longitude });

      if (place) {
        const fullAddress =
          `${place.name ? `Số ${place.name}` : ''}` +
          `${place.street ? `, Đường ${place.street}` : ''}` +
          `${place.subregion ? `, ${place.subregion}` : ''}` +
          `${place.district ? `, ${place.district}` : ''}` +
          `${place.region || place.city ? `, ${place.region || place.city}` : ''}`;

        setAddressText(fullAddress.trim());
      }
    } catch (err) {
      console.log('Lỗi khi lấy địa chỉ:', err);
      setAddressText('Không thể lấy địa chỉ');
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const handleMapPress = () => {
    if (!coords) {
      console.warn('Chưa có vị trí');
      return;
    }

    navigation.navigate('Home', {
      screen: 'CustomerMapPickerScreen', 
      params: {
        coords,
        province,
        district,
        ward,
      },
    });
  };

  return (
    <View style={[styles.container, isExpanded && styles.containerActive]}>
      <View style={styles.row}>
        <Text style={styles.label}>Street Name, Building, House Number</Text>
      </View>

      <TouchableOpacity onPress={handleMapPress} activeOpacity={0.9}>
        <View style={styles.content}>
          <View style={styles.textBlock}>
            <Text style={styles.locationText}>{province}</Text>
            <Text style={styles.locationText}>{district}</Text>
            <Text style={styles.locationText}>{ward}</Text>
            <Text style={[styles.locationText, styles.addressLine]}>
              📍{addressText}
            </Text>
          </View>

          <View style={styles.mapWrapper}>
            <Map mini />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AddressSelector;
