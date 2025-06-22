import React from 'react';
import { Text, View, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './ButtonAddress.style';

const ButtonAddress = () => {
  const navigation = useNavigation();

  const handleDelete = () => {
    Alert.alert(
      'Confirm Delete Address',
      'Are you sure you want to delete this address?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            console.log('Address has been deleted');
          },
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  const handleComplete = () => {
    navigation.navigate('CustomerSelectAddressScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.rectangleDelete} onPress={handleDelete}>
          <Text style={styles.textDelete}>Delete address</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectangleComplete} onPress={handleComplete}>
          <Text style={styles.textComplete}>Completed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ButtonAddress;
