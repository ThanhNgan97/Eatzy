import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './NameInput.style';
import DynamicIcon from '../../../shared/Icons/DynamicIcon'; 
import fonts from '../../../constants/fonts';

const NameInput = () => {
  const [fullName, setFullName] = useState('');
  const [isFocused, setIsFocused] = useState(false); 
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.rectangleInputName,
          isFocused && { borderColor: '#68BD6C', borderWidth: 1 }, 
        ]}
      >
        <Text style={styles.addressText}>Address</Text>
        <Text style={styles.nameText}>FullName</Text>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Enter name"
            placeholderTextColor="#ccc"
            value={fullName}
            onChangeText={setFullName}
            onFocus={() => setIsFocused(true)}   
            onBlur={() => setIsFocused(false)}   
            style={[
              styles.input,
              {
                fontSize: 14,
                fontFamily: fonts.HelveticaNeueMedium,
                color: '#33363F',
                marginLeft:-13
              },
            ]}
          />

          {fullName.length > 0 && (
            <TouchableOpacity onPress={() => setFullName('')} style={styles.clearButton}>
              <DynamicIcon type="Ionicons" name="close-circle" size={20} color="#68BD6C" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default NameInput;
