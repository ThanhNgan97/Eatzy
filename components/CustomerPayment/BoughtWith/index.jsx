import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import boughtWithData from './boughtWithData';
import BoughtWithItem from './BoughtWithItem';
import fonts from '../../../constants/fonts';


const BoughtWithList = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Usually bought with</Text>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={boughtWithData}
      renderItem={({ item }) => <BoughtWithItem item={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F4F8F7',
    marginTop:-10

  },
  title: {
    fontSize: 16,
    marginBottom: 12,
    fontFamily:fonts.HelveticaNeueBold,
    color:'#484C4D'
  },
});

export default BoughtWithList;
