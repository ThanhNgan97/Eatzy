import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./ShopReport.style";
import reportData from "./ShopReportData";

const ShopReport = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemLeft}>
        <Text style={styles.orderId}>{item.id}</Text>
        <Text style={styles.orderTime}>{item.time}</Text>
      </View>
      <View
        style={[
          styles.statusBadge,
          item.status === "Shipped" ? styles.shipped : styles.canceled,
        ]}
      >
        <Text
          style={[
            styles.statusText,
            item.status === "Shipped"
              ? styles.shippedText
              : styles.canceledText,
          ]}
        >
          {item.status}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.totalIncome}>2.135.543₫</Text>
      <Text style={styles.dateText}>Today, June 4th, 2025</Text>

      <FlatList
        data={reportData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ShopReport;
