import React from "react";
import { View, Text } from "react-native";
import styles from "./StatsSection.style";

const StatBox = ({ value, label }) => (
  <View style={styles.statBox}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

export default StatBox;
