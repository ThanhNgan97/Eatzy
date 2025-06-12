import React from 'react'
import { ScrollView, StyleSheet } from 'react-native';
import NameInput from "../components/EditAddress/NameInput/input";
import PhoneInput from "../components/EditAddress/PhoneInput";
import AddressSelector from "../components/EditAddress/AddressSelector/index";
// import AddressMapSelector from "../components/EditAddress/AddressMapSelector/index"

const EditAddressScreen = () => {
  return (
    <ScrollView style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled">

        <NameInput/>
        <PhoneInput/>
        <AddressSelector/>
        {/* <AddressMapSelector/> */}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },

  content: {
    paddingHorizontal: 10,
    marginTop:10
  },
});

export default EditAddressScreen
