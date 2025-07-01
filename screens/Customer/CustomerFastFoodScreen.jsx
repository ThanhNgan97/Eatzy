import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import FastFood from "../../components/CustomerFastFood/FastFood";

const CustomerFastFoodScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <FastFood />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },

  content: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

export default CustomerFastFoodScreen;
