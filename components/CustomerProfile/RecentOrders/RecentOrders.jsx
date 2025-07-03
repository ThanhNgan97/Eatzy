import React from "react";
import { View, Text, FlatList } from "react-native";
import OrderItem from "../OrderItem/OrderItem";
import styles from "./RecentOrders.style";
import recentOrders from "./recentOrdersData"

const RecentOrders = () => (
  <View>
    <Text style={styles.sectionTitle}>Recent orders</Text>
    <FlatList
      data={recentOrders}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <OrderItem item={item} />}
      scrollEnabled={false}
      style={styles.orderList}
    />
  </View>
);

export default RecentOrders;
