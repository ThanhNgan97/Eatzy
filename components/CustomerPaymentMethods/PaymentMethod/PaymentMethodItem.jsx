import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './PaymentMethod.style';
import DynamicIcon from '../../../shared/Icons/DynamicIcon';

const PaymentMethodItem = ({ selectedMethod, setSelectedMethod }) => {
  const isSelected = selectedMethod === 'cod';

  const handleSelect = () => {
    setSelectedMethod('cod');
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Linked payment methods</Text>
      <Text style={styles.subtitle}>Swipe left to set as default</Text>

      <TouchableOpacity
        style={styles.container}
        onPress={handleSelect}
        activeOpacity={0.7}
      >
        <View style={styles.iconWrapper}>
          <DynamicIcon
            type="FontAwesome"
            name="money"
            size={20}
            color="#68BD6C"
          />
        </View>

        <Text style={styles.label}>Cash on Delivery (COD)</Text>

        <View
          style={[
            styles.radioCircle,
            isSelected && styles.radioCircleSelected,
          ]}
        >
          {isSelected ? (
            <DynamicIcon
              type="FontAwesome"
              name="check"
              size={12}
              color="white"
            />
          ) : (
            <View style={styles.radioInnerEmpty} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentMethodItem;
