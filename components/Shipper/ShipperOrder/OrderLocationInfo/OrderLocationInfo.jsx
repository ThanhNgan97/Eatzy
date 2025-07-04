import React from "react";
import { View, Text } from "react-native";
import styles from "./OrderLocationInfo.style";

const OrderLocationInfo = ({ from, to }) => {
  return (
    <>
      <Text style={styles.label}>
        <Text style={styles.bold}>Tại: </Text>🍔 {from}
      </Text>
      <View style={styles.destinationRow}>
        <Text style={styles.bold}>Đến: </Text>
        <Text style={styles.address}>{to}</Text>
      </View>
    </>
  );
};

export default OrderLocationInfo;
