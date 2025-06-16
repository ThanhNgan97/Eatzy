import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ShipperHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Ionicons
        name="arrow-back"
        size={24}
        color="black"
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.headerText}>Shipping</Text>
      <View style={{ width: 24 }} />
    </View>
  );
};

export default ShipperHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    fontFamily: "Helvetica Neue",
    fontSize: 24,
    fontWeight: "400",
    color: "#7E7E7E",
  },
});
