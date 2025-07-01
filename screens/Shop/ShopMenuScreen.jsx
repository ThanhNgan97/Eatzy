import { ScrollView, StyleSheet } from "react-native";
import ShopMenu from "../../components/Shop/ShopMenu/ShopMenu";

const ShopMenuScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <ShopMenu />
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

export default ShopMenuScreen;
