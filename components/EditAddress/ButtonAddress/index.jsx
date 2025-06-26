import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './ButtonAddress.style';
import CustomAlert from '../../../shared/CustomAlert/CustomAlert';

const ButtonAddress = () => {
  const navigation = useNavigation();
  const [showAlert, setShowAlert] = useState(false);

  const handleDelete = () => {
    setShowAlert(true);
  };

  const confirmDelete = () => {
    console.log('Address has been deleted');
    setShowAlert(false);
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

      <CustomAlert
        visible={showAlert}
        title="Delete Address"
        message="Are you sure you want to delete this address?"
        onClose={() => setShowAlert(false)}
        onConfirm={confirmDelete}
        confirmText="Delete"
        cancelText="Cancel"
        containerStyle={styles.alertContainer}
        titleStyle={styles.alertTitle}
        messageStyle={styles.alertMessage}
        confirmButtonStyle={styles.confirmButton}
        cancelButtonStyle={styles.cancelButton}
        confirmTextStyle={styles.confirmText}
        cancelTextStyle={styles.cancelText}
      />

    </View>
  );
};


export default ButtonAddress