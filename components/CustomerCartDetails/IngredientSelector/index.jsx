import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import ingredientsData from './ingrediensData';
import styles from './IngredientSelector.style';
import DynamicIcon from '../../../shared/Icons/DynamicIcon';

const IngredientSelector = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelect = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Add Ingredients</Text>
      <View style={styles.list}>
        {ingredientsData.map((item) => {
          const isSelected = selectedItems.includes(item.id);
          return (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.card,
                isSelected ? styles.cardSelected : styles.cardUnselected,
              ]}
              onPress={() => toggleSelect(item.id)}
              activeOpacity={0.8}
            >
              <Image source={item.image} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.subInfo}>
                  {item.quantity} {item.price}
                </Text>
              </View>
           <View
              style={[
                styles.customCheckbox,
                isSelected ? styles.checkboxSelected : styles.checkboxUnselected,
              ]}
            >
              {isSelected && (
                <DynamicIcon type="MaterialIcons" name="check" size={14} color="#fff" />
              )}
          </View>

            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default IngredientSelector;
