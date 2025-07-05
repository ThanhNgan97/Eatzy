import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./ShipperOrder.style";
import { useNavigation } from "@react-navigation/native";

const orders = [
  {
    id: "FD-713",
    distance: "5.1 km",
    from: "Bánh mì Bơ béo",
    to: "123 Trần Văn Hoài, P. Xuân Khánh, Q. Ninh Kiều, Tp. Cần Thơ",
    price: 100000,
    timeLeft: "30mins left",
  },

];

const ShipperOrder = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {orders.map((item, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.rowBetween}>
            <Text style={styles.orderId}>
              {item.id} <Text style={styles.distance}>{item.distance}</Text>
            </Text>
            <View style={styles.timeBox}>
              <Text style={styles.timeText}>{item.timeLeft}</Text>
            </View>
          </View>

          <Text style={styles.label}>
            <Text style={styles.bold}>Tại: </Text>🍔 {item.from}
          </Text>

          <View style={styles.destinationRow}>
            <Text style={styles.bold}>Đến: </Text>
            <Text style={styles.address}>{item.to}</Text>
          </View>

          <View style={styles.rowBetween}>
            <Text style={styles.price}>{item.price.toLocaleString()}đ</Text>
            <TouchableOpacity
              style={styles.takeButton}
              onPress={() => navigation.navigate("ShipperOrderDetailScreen")}
            >
              <Text style={styles.takeButtonText}>Take order</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ShipperOrder;
