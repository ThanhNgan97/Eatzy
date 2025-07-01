import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import AddressScreen from "../../components/CustomerSelectAddress/AddressScreen/index";
import AddNewAddressButton from "../../components/CustomerSelectAddress/AddNewAddressButton/index";

const CustomerSelectAddressScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <AddressScreen />
      <AddNewAddressButton />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },

  content: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

export default CustomerSelectAddressScreen;
