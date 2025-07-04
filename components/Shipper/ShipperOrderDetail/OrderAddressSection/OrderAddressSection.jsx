import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./OrderAddressSection.style";

const OrderAddressSection = ({ label, address, buttonText, isGreen }) => (
  <View style={styles.section}>
    <Text style={styles.grayLabel}>{label}</Text>
    <Text style={styles.address}>{address}</Text>
    <TouchableOpacity
      style={[styles.actionButton, isGreen && styles.greenButton]}
    >
      <Text style={isGreen ? styles.greenButtonText : styles.actionButtonText}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  </View>
);

export default OrderAddressSection;
