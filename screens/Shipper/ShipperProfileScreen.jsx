import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import ShipperProfile from "../../components/Shipper/ShipperProfile/ShipperProfile";

const ShipperProfileScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <ShipperProfile />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },
  content: {
    paddingBottom: 30,
  },
});

export default ShipperProfileScreen;
