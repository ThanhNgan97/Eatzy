import React from "react";
import { View, Text } from "react-native";
import styles from "./OrderCard.style";
import OrderLocationInfo from "../OrderLocationInfo/OrderLocationInfo";
import OrderFooter from "../OrderFooter/OrderFooter";

const OrderCard = ({ order }) => {
  return (
    <View style={styles.card}>
      <View style={styles.rowBetween}>
        <Text style={styles.orderId}>
          {order.id} <Text style={styles.distance}>{order.distance}</Text>
        </Text>
        <View style={styles.timeBox}>
          <Text style={styles.timeText}>{order.timeLeft}</Text>
        </View>
      </View>

      <OrderLocationInfo from={order.from} to={order.to} />
      <OrderFooter price={order.price} />
    </View>
  );
};

export default OrderCard;
