import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './SizeSelector.style';

const sizes = [
  { id: 'M', label: 'M - Small', price: '19.000₫' },
  { id: 'L', label: 'L - Medium', price: '20.000đ' },
  { id: 'XL', label: 'XL - Large', price: '30.000đ' },
];

const SizeSelector = () => {
  const [selected, setSelected] = useState('L');

  return (
    <View style={styles.selector}>
      {sizes.map((size) => (
        <TouchableOpacity
          key={size.id}
          style={[
            styles.option,
            selected === size.id && styles.optionSelected,
          ]}
          onPress={() => setSelected(size.id)}
        >
          <View
            style={[
              styles.radioCircle,
              selected === size.id
                ? styles.radioCircleSelected
                : styles.radioCircleUnselected,
            ]}
          >
            {selected === size.id && <View style={styles.innerDot} />}
          </View>
          <Text style={styles.label}>{size.label}</Text>
          <Text style={styles.price}>{size.price}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SizeSelector;