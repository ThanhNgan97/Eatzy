import React from "react";
import { View, StyleSheet } from "react-native";
import ShipperOrderDetail from "../../components/Shipper/ShipperOrder/ShipperOrderDetail/ShipperOrderDetail";

const ShipperOrderDetailScreen = () => {
  return (
    <View style={styles.container}>
      <ShipperOrderDetail />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f8f7",
  },
});

export default ShipperOrderDetailScreen;
