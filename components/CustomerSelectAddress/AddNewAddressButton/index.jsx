import React from 'react';
import {Text, TouchableOpacity, StyleSheet } from 'react-native';
import DynamicIcon from '../../../shared/Icons/DynamicIcon';
import styles from './AddNewAddressButton'; 

const AddNewAddressButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <DynamicIcon type="Feather" name="plus-circle" size={18} color="#68BD6C" />
      <Text style={styles.buttonText}>Add New Address</Text>
    </TouchableOpacity>
  );
};



export default AddNewAddressButton;
