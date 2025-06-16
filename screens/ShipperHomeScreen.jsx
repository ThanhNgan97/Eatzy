import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ShipperHeader from "../components/ShipperHome/ShipperHeader";
import AddressBar from "../components/ShipperHome/AddressBar";
import MapSection from "../components/ShipperHome/MapSection";
import ShipperProfileCard from "../components/ShipperHome/ShipperProfileCard";

const ShipperHomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ShipperHeader />
      <AddressBar />
      <MapSection />
      <ShipperProfileCard />
    </ScrollView>
  );
};

export default ShipperHomeScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
    backgroundColor: "#F2F2F2",
  },
});
