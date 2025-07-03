import React from "react";
import { View, Text, Image } from "react-native";
import DynamicIcon from "../../../shared/Icons/DynamicIcon";
import styles from "./OrderItem.style";

const OrderItem = ({ item }) => (
  <View style={styles.orderItem}>
    <Image source={{ uri: item.image }} style={styles.orderImage} />
    <View style={styles.orderInfo}>
      <Text style={styles.orderTitle}>{item.name}</Text>
      <Text style={styles.orderShop}>{item.shop}</Text>
    </View>
    <DynamicIcon
      type="Ionicons"
      name={item.status === "done" ? "checkmark-circle" : "close-circle"}
      size={24}
      color={item.status === "done" ? "green" : "red"}
    />
  </View>
);

export default OrderItem;
