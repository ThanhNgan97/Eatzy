import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import DynamicIcon from '../../../shared/Icons/DynamicIcon';
import fonts from '../../../constants/fonts';
import styles from './PhoneInput.style';

const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.rectangleInputPhone}>
        <Text style={{ 
          fontSize: 12, 
          color: '#7e7e7e', 
          fontFamily: fonts.HelveticaNeueMedium,
          marginLeft:8,
        }}>
          Number phone
        </Text>

        <View style={styles.textInputPhone}>
          <TextInput
            placeholder="Enter phone"
            placeholderTextColor="#ccc"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{
              flex: 1,
              padding: 10,
              borderRadius: 8,
              fontSize: 14,
              color: '#33363F',
              fontFamily: fonts.HelveticaNeueMedium,
            }}
          />
          {phoneNumber.length > 0 && (
            <TouchableOpacity onPress={() => setPhoneNumber('')} style={{ marginLeft: 8 }}>
              <DynamicIcon type="Ionicons" name="close-circle" size={20} color="#68BD6C" />
            </TouchableOpacity>
          )}
        </View>
      </View>
     
    </View>
  );
};

export default PhoneInput;
