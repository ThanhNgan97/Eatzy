import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import AddFood from "../../components/Shop/ShopMenu/AddFood/AddFood";

const AddFoodScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <AddFood />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },

  content: {
    flexGrow: 1,
  },
});

export default AddFoodScreen;
