import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './AddressSelector.style';
import DynamicIcon from '../../../shared/Icons/DynamicIcon';

const AddressSelector = ({ province, district, ward, onPress, isExpanded }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isExpanded && styles.containerActive 
      ]}
      onPress={onPress}
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
      </View>
    </TouchableOpacity>
  );
};

export default AddressSelector;
