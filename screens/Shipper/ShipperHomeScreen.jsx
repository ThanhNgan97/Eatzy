import { View, StyleSheet } from "react-native";
import ShipperHome from "../../components/Shipper/ShipperHome/ShipperHome";

const ShipperHomeScreen = () => {
  return (
    <View style={styles.container}>
      <ShipperHome />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },
});

export default ShipperHomeScreen;
