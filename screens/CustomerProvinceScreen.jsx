import React from "react";
import { View, StyleSheet } from "react-native";
import LocationPicker from "../components/CustomerProvince";

const CustomerProvinceScreen = () => {
  return (
    <View style={styles.container}>
        <LocationPicker/>
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
