import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import styles from './AddressSelector.style';
import DynamicIcon from '../../../shared/Icons/DynamicIcon';
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
      setCoords({ latitude, longitude });

      fetchAddressFromCoords(latitude, longitude);
    } catch (error) {
      console.log('Lỗi vị trí:', error);
      setAddressText('Không thể lấy vị trí');
    }
  };


  const fetchAddressFromCoords = async (latitude, longitude) => {
  try {
    const [place] = await Location.reverseGeocodeAsync({ latitude, longitude });

    if (place) {
      const houseNumber = place.name || '';               
      const street = place.street || '';                    
      const ward = place.subregion || '';                   
      const district = place.district || '';                 
      const city = place.region || place.city || '';         

      const fullAddress = 
        `${houseNumber ? `Số ${houseNumber}` : ''}` +
        `${street ? `, Đường ${street}` : ''}` +
        `${ward ? `, ${ward}` : ''}` +
        `${district ? `, ${district}` : ''}` +
        `${city ? `, ${city}` : ''}`;

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

  const handlePress = () => {
    navigation.navigate('CustomerMapPickerScreen', {
      province,
      district,
      ward,
      coords,
    });
  };

  return (
    <TouchableOpacity
      style={[styles.container, isExpanded && styles.containerActive]}
      onPress={handlePress}
      activeOpacity={1}
    >
      <View style={styles.row}>
        <Text style={styles.label}>Province/City, District, Ward</Text>
        <View style={{ transform: [{ rotate: isExpanded ? '90deg' : '0deg' }] }}>
          <TouchableOpacity
          onPress={() => navigation.navigate('Payment', {
            screen: 'CustomerProvinceScreen',
          })}
          style={{ padding: 5 }} 
        >
          <View style={{ transform: [{ rotate: isExpanded ? '90deg' : '0deg' }] }}>
            <DynamicIcon
              type="MaterialIcons"
              name="keyboard-arrow-right"
              size={18}
              color="#484C4D"
            />
          </View>
        </TouchableOpacity>

        </View>
      </View>

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
  );
};

export default AddressSelector;