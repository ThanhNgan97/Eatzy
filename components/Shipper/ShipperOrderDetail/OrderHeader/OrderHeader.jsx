import React from "react";
import { View, Text } from "react-native";
import styles from "./OrderHeader.style";

const OrderHeader = ({ orderId, cashCollect }) => (
  <View style={styles.orderTop}>
    <Text style={styles.orderId}>{orderId}</Text>
    <Text style={styles.cashCollect}>{cashCollect}</Text>
  </View>
);

export default OrderHeader;
