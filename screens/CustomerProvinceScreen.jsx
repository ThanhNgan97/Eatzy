import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import LocationPickerWithSearch from "../components/CustomerProvince/LocationPicker/index" 

const CustomerProvinceScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >

      <LocationPickerWithSearch/>
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

export default CustomerProvinceScreen;
