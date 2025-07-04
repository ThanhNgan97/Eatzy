import React from "react";
import { View } from "react-native";
import styles from "./OrderList.style";
import OrderCard from "../OrderCard/OrderCard";

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

const OrderList = () => {
  return (
    <View style={styles.container}>
      {orders.map((order, index) => (
        <OrderCard key={index} order={order} />
      ))}
    </View>
  );
};

export default OrderList;
