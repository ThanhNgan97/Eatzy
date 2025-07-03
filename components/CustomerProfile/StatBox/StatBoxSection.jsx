import React from "react";
import { View } from "react-native";
import styles from "./StatsSection.style";
import StatBox from "./StatBox";

const StatsSection = () => {
  return (
    <View style={styles.statsRow}>
      <StatBox value="39" label="orders" />
      <StatBox value="12" label="following" />
      <StatBox value="4.9/5" label="ratings" />
    </View>
  );
};

export default StatsSection;
