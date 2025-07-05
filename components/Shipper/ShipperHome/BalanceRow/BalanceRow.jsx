import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./BalanceRow.style";

const BalanceRow = () => {
  return (
    <View style={styles.balanceRow}>
      <View style={styles.balanceBox}>
        <Ionicons
          name="wallet-outline"
          size={28}
          color="#4CAF50"
          style={styles.balanceIcon}
        />
        <Text style={styles.balanceLabel}>Ví tín dụng</Text>
        <Text style={styles.balanceAmount}>2.735.000đ</Text>
      </View>

      <View style={styles.balanceBox}>
        <Ionicons
          name="card-outline"
          size={28}
          color="#4CAF50"
          style={styles.balanceIcon}
        />
        <Text style={styles.balanceLabel}>Tài khoản riêng</Text>
        <Text style={styles.balanceAmount}>2.735.000đ</Text>
      </View>
    </View>
  );
};

export default BalanceRow;
