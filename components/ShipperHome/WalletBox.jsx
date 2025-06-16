import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WalletBox = ({ label, amount }) => {
  return (
    <View style={styles.walletBox}>
      <View style={styles.boxIcon} />
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
};

export default WalletBox;

const styles = StyleSheet.create({
  walletBox: {
    backgroundColor: "#eafbea",
    borderRadius: 12,
    padding: 12,
    width: "47%",
    alignItems: "center",
  },
  boxIcon: {
    width: 32,
    height: 32,
    backgroundColor: "#ccc",
    borderRadius: 6,
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  amount: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
