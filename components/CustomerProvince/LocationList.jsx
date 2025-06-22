// components/LocationList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './LocationList.style';

const LocationList = ({ data, onSelect, selectedId }) => {
  const renderItem = ({ item }) => {
    const isSelected = selectedId === item.id;
    return (
      <TouchableOpacity
        style={[styles.itemContainer, isSelected && styles.selectedItem]}
        onPress={() => onSelect(item)}
      >
        <Text style={[styles.itemText, isSelected && styles.selectedText]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default LocationList;
