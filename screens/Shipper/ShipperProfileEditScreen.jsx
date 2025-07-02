import React from "react";
import { View, StyleSheet } from "react-native";
import ShipperProfileEdit from "../../components/Shipper/ShipperProfile/ShipperProfileEdit/ShipperProfileEdit";

const ShipperProfileEditScreen = () => {
  return (
    <View style={styles.container}>
      <ShipperProfileEdit />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },
});

export default ShipperProfileEditScreen;
