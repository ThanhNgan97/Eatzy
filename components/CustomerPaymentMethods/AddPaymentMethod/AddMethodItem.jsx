import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import DynamicIcon from '../../../shared/Icons/DynamicIcon';
import styles from './AddMethodItem.style';

const AddMethodItem = ({
  title = 'Connect to your bank account',
  onPress = () => {},
  useImage = false,
  imageSource = require('../../../assets/images/momo.png'),
  iconType = 'FontAwesome',
  iconName = 'credit-card',
  iconColor = '#68BD6C',
  iconBgColor = '#d3ecd4',
  selectedMethod,
  setSelectedMethod,
  id, // thêm ID để phân biệt
}) => {
  const isSelected = selectedMethod === id;

  const handlePress = () => {
    setSelectedMethod(id);
    onPress();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={handlePress}>
        <View
          style={[
            styles.iconContainer,
            useImage ? styles.imageContainer : { backgroundColor: iconBgColor },
          ]}
        >
          {useImage ? (
            <Image source={imageSource} style={styles.image} />
          ) : (
            <DynamicIcon
              type={iconType}
              name={iconName}
              size={20}
              color={iconColor}
            />
          )}
        </View>

        <View style={styles.row}>
          <Text style={styles.title}>{title}</Text>
          {isSelected && (
            <DynamicIcon type="Feather" name="check" size={18} color="#68BD6C" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AddMethodItem;
