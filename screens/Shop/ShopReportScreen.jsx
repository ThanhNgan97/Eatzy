import { ScrollView, StyleSheet } from "react-native";
import ShopReport from "../../components/Shop/ShopReport";

const ShopReportScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <ShopReport />
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
    flexGrow:1,
    justifyContent:'center',
    alignItems:'center'
    
  },
});

export default ShopReportScreen;
