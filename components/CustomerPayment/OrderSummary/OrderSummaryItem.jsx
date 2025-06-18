import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './OrderSummaryItem.style';
import { useNavigation } from '@react-navigation/native';

const OrderItem = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.itemContainer}>
  
      <TouchableOpacity style={styles.editButton}
        onPress={() => navigation.navigate('CustomerCartScreen')} 
      >
        <Text style={styles.editText}>Edit</Text>
      </TouchableOpacity>

      
      <View style={styles.row}>
        <Image
          source={require('../../../assets/images/CustomerFastFood/Pizza.png')} 
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.name}>Melting Cheese Pizza</Text>
          <Text style={styles.subtitle}>Pizza Italiano</Text>
          <Text style={styles.price}>$10.99</Text>
        </View>
        <Text style={styles.quantity}>×1</Text>
      </View>
    </View>
  );
};

export default OrderItem;