import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './QuantityAndCart.style';
import DynamicIcon from '../../../shared/Icons/DynamicIcon';

const QuantityAndCart = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 12; 

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const formatVND = (valueInThousands) => {
    const realValue = valueInThousands * 1000;
    return realValue.toLocaleString('vi-VN') + ' đ';
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decrement} style={styles.iconBox}>
          <DynamicIcon type ="MaterialIcons" name="delete-outline" size={20} color="#7E7E7E" />
        </TouchableOpacity>

        <Text style={styles.quantityText}>{quantity}</Text>

        <TouchableOpacity onPress={increment} style={styles.iconBox}>
          <DynamicIcon type="AntDesign" name="plus" size={20} color="#68BD6C" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.cartButton}>
        <Text style={styles.cartButtonText}>
          Add to Cart {formatVND(quantity * price)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuantityAndCart;
