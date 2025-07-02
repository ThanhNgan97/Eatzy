import { ScrollView, StyleSheet } from "react-native";
import ShipperHome from "../../components/Shipper/ShipperHome/ShipperHome";

const ShipperHomeScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <ShipperHome />
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
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ShipperHomeScreen;
