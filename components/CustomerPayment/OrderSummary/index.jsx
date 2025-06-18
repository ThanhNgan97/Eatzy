import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import OrderItem from './OrderSummaryItem';
import fonts from '../../../constants/fonts';

const OrderSummary = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Order summary</Text>
        <TouchableOpacity>
          <Text style={styles.add}>Add</Text>
        </TouchableOpacity>
      </View>

      <OrderItem />
      
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F8F7',
    padding: 12,
    borderRadius: 12,
    marginTop:-15
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontFamily:fonts.HelveticaNeueBold,
    color:'#484C4D'
  },
  add: {
    color: '#68BD6C',
    fontSize:14,
    fontFamily:fonts.HelveticaNeueMedium
  },
});
