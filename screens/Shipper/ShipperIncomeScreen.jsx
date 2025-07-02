import { ScrollView, StyleSheet } from "react-native";
import ShipperIncome from "../../components/Shipper/ShiperIncome/ShipperIncome";

const ShipperIncomeScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <ShipperIncome />
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

export default ShipperIncomeScreen;
