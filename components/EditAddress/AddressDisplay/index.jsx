import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import styles from './AddressDisplay.style';
import DynamicIcon from '../../../shared/Icons/DynamicIcon';

const AddressDisplay = () => {
  const navigation = useNavigation(); 

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.card}>
        <View style={styles.row}>
            <Text style={styles.label}>Province/City, District, Ward/Commune</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Payment', 
                    {screen: 'CustomerProvinceScreen',})}
            >
                <View style={{ transform: [{ rotate: '0deg' }] }}>
                <DynamicIcon
                    type="MaterialIcons"
                    name="keyboard-arrow-right"
                    size={18}
                    color="#484C4D"
                />
                </View>
            </TouchableOpacity>
            
        </View>

        <View style={styles.addressWrapper}>
          <Text style={styles.value}>Cần Thơ</Text>

        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AddressDisplay;
