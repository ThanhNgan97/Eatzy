import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Map from '../../shared/Map/Map';

const CustomerMapPickerScreen = () => {
  return (
    <View style={styles.container}>
      <Map />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomerMapPickerScreen;
