import React from "react";
import { View, StyleSheet } from "react-native";

import AvatarName from "../../components/Shipper/ShipperHome/AvatarName/AvatarName";
import BalanceRow from "../../components/Shipper/ShipperHome/BalanceRow/BalanceRow";
import GetOrderButton from "../../components/Shipper/ShipperHome/GetOrderButton/GetOrderButton";
import AddressBar from "../../shared/AddressBar/";
import Map from "../../shared/Map/Map";

const ShipperHomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <AddressBar />
        <Map/>
        <View style={styles.profileCardWrapper}>
          <AvatarName />
          <BalanceRow />
          <GetOrderButton />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },

  wrapper: {
    flex: 1,
    paddingTop: 30,
  },

  profileCardWrapper: {
    backgroundColor: "white",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
});

export default ShipperHomeScreen;
