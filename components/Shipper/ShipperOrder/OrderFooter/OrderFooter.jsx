import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./OrderFooter.style";
import { useNavigation } from "@react-navigation/native";

const OrderFooter = ({ price }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.rowBetween}>
      <Text style={styles.price}>{price.toLocaleString()}đ</Text>
      <TouchableOpacity
        style={styles.takeButton}
        onPress={() => navigation.navigate("ShipperOrderDetailScreen")}
      >
        <Text style={styles.takeButtonText}>Take order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderFooter;
