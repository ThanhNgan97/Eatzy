import React from "react";
import { View, Text } from "react-native";
import styles from "./IncomeSummary.style";

const IncomeSummary = () => {
  return (
    <View style={styles.summaryContainer}>
      <View style={styles.summaryHeader}>
        <Text style={styles.sectionTitle}>Thu nhập theo đơn</Text>
        <Text style={styles.orderCount}>193 đơn hàng</Text>
      </View>

      <View style={styles.summaryRow}>
        <Text style={[styles.symbol, { color: "red" }]}>$</Text>
        <Text style={styles.summaryLabel}>Phí giao hàng</Text>
        <Text style={styles.summaryValue}>432,187₫</Text>
      </View>

      <View style={styles.summaryRow}>
        <Text style={[styles.symbol, { color: "green" }]}>$</Text>
        <Text style={styles.summaryLabel}>Tiền khách thưởng</Text>
        <Text style={styles.summaryValue}>106,225₫</Text>
      </View>

      <View style={styles.summaryRow}>
        <Text style={[styles.symbol, { color: "gold" }]}>$</Text>
        <Text style={styles.summaryLabel}>Tiền công ty thưởng</Text>
        <Text style={styles.summaryValue}>399,250₫</Text>
      </View>
    </View>
  );
};

export default IncomeSummary;
