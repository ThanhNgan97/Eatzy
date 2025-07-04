import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./BalanceWithdraw.style";

const BalanceWithdraw = () => {
  return (
    <View style={styles.balanceContainer}>
      <Text style={styles.balanceText}>Bạn có thể nhận được 2,205,004₫</Text>
      <TouchableOpacity style={styles.withdrawButton}>
        <Text style={styles.withdrawButtonText}>Rút tiền</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BalanceWithdraw;
