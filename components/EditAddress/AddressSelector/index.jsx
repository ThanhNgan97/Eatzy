import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './AddressSelector.style';
import DynamicIcon from '../../../shared/Icons/DynamicIcon';
import Map from '../../../shared/Map/Map';

const AddressSelector = ({ province, district, ward, isExpanded }) => {
  const navigation = useNavigation();

const handlePress = () => {
  navigation.navigate('CustomerMapPickerScreen', {
    province,
    district,
    ward,
  });
};


  return (
    <TouchableOpacity
      style={[
        styles.container,
        isExpanded && styles.containerActive
      ]}
      onPress={handlePress}
      activeOpacity={1}
    >
      <View style={styles.row}>
        <Text style={styles.label}>Tỉnh/Thành phố, Quận/Huyện, Phường/Xã</Text>
        <View style={{ transform: [{ rotate: isExpanded ? '90deg' : '0deg' }] }}>
          <DynamicIcon
            type="MaterialIcons"
            name="keyboard-arrow-right"
            size={18}
            color="#484C4D"
          />
        </View>
      </View>

      <View style={styles.content}>
        <View>
          <Text style={styles.locationText}>{province}</Text>
          <Text style={styles.locationText}>{district}</Text>
          <Text style={styles.locationText}>{ward}</Text>
        </View>

        <View style={styles.mapWrapper}>
          <Map mini />
        </View>

      </View>
    </TouchableOpacity>
  );
};

export default AddressSelector;
