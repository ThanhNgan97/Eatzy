import React from 'react';
import { View, Text, Image,} from 'react-native';
import styles from './BoughtWith.style';

const BoughtWithItem = ({ item }) => (
  <View style={styles.card}>
    <View style={styles.textContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </View>
    <Image source={item.image} style={styles.image} />
  </View>
);



export default BoughtWithItem;
