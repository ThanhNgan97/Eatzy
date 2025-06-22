import React from 'react';
import { ScrollView, StyleSheet, View, SafeAreaView } from 'react-native';
import NameInput from "../components/EditAddress/NameInput/input";
import PhoneInput from "../components/EditAddress/PhoneInput";
import AddressSelector from "../components/EditAddress/AddressSelector/index";
import ButtonAddress from '../components/EditAddress/ButtonAddress';

const EditAddressScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Nội dung cuộn */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <NameInput />
        <PhoneInput />
        <AddressSelector />
        {/* Không đặt ButtonAddress ở đây */}
      </ScrollView>

      {/* Nút cố định */}
      <View style={styles.fixedButton}>
        <ButtonAddress />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 10,
    paddingBottom: 100, 
    marginTop: 10,
  },
  fixedButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default EditAddressScreen;
