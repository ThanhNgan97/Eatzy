import { ScrollView, StyleSheet } from "react-native";
import ShopHome from "../../components/Shop/ShopHome/ShopHome.jsx";

const ShopHomeScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <ShopHome />
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

export default ShopHomeScreen;
