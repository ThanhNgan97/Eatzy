import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./BalanceWithdraw.style";
import DynamicIcon from "../../../../shared/Icons/DynamicIcon";

const BalanceWithdraw = () => {
  return (
    <View style={styles.balanceContainer}>
      <View style={styles.row}>
        <DynamicIcon 
          type="MaterialCommunityIcons" 
          name="credit-card-outline" 
          size={24} 
          color="#fff" 
        />
        <Text style={styles.balanceText}>Bạn có thể nhận được 2,205,004₫</Text>
      <TouchableOpacity style={styles.withdrawButton}>
        <Text style={styles.withdrawButtonText}>Rút tiền</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default BalanceWithdraw;
