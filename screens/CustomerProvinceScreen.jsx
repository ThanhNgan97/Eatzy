import React from "react";
import { View, StyleSheet } from "react-native";
import LocationPickerWithSearch from "../components/CustomerProvince/index";

const CustomerProvinceScreen = () => {
  return (
    <View style={styles.container}>
      {/* <LocationPickerWithSearch /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

export default CustomerProvinceScreen;
