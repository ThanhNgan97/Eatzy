import React from "react";
import { View, Text } from "react-native";
import styles from "./MapPlaceholder.style";

const MapPlaceholder = () => {
  return (
    <View style={styles.mapWrapper}>
      <Text style={styles.mapText}>bản đồ ở đây</Text>
    </View>
  );
};

export default MapPlaceholder;
