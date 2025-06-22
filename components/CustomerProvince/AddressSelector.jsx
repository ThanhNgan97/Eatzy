import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './AddressSelector.style';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AddressSelector = ({ province, district, ward }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('LocationPicker')}
    >
      <Text style={styles.label}>Địa chỉ giao hàng</Text>
      <View style={styles.row}>
        <Text style={styles.value}>
          {province}, {district}, {ward}
        </Text>
        <Icon name="keyboard-arrow-right" size={20} color="#999" />
      </View>
    </TouchableOpacity>
  );
};

export default AddressSelector;
