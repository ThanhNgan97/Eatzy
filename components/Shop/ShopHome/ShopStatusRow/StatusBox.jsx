import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons"; 
import styles from "./ShopStatusRow.style";

const StatusBox = ({ status, onPress, color }) => {
  return (
    <View style={styles.statusBoxGreen}>
      <TouchableOpacity style={styles.dropdownWrapper} onPress={onPress}>
        <View style={styles.statusInner}>
          <View style={[styles.statusDot, { backgroundColor: color }]} />
          <Text style={styles.dropdownText}>
            Shop is {status.toLowerCase()}
          </Text>
          <Entypo name="chevron-down" size={16} color="#333" style={styles.dropdownIcon} />
        </View>
      </TouchableOpacity>

      <Text style={styles.statusNumber}>13</Text>
      <Text style={styles.statusLabel}>orders</Text>
    </View>
  );
};

export default StatusBox;
