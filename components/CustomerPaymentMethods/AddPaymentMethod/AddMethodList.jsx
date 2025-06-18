import React from 'react';
import { View, Text } from 'react-native';
import AddMethodItem from './AddMethodItem';
import styles from './AddMethodItem.style';

const AddMethodList = ({ selectedMethod, setSelectedMethod }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Add Methods</Text>

      <AddMethodItem
        title="Connect to your bank account"
        id="bank"
        selectedMethod={selectedMethod}
        setSelectedMethod={setSelectedMethod}
      />

      <AddMethodItem
        title="Momo e-wallet"
        id="momo"
        useImage={true}
        imageSource={require('../../../assets/images/momo.png')}
        selectedMethod={selectedMethod}
        setSelectedMethod={setSelectedMethod}
      />
    </View>
  );
};

export default AddMethodList;
