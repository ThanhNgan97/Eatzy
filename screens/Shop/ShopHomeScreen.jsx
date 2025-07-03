import { ScrollView, StyleSheet } from "react-native";
import AddressBar from "../../shared/AddressBar/index.jsx"
import ShopGreetingHeader from "../../components/Shop/ShopHome/ShopGreetingHeader/ShopGreetingHeader.jsx";
import ShopStatusRow from "../../components/Shop/ShopHome/ShopStatusRow/ShopStatusRow.jsx";
import MenuGrid from "../../components/Shop/ShopHome/MenuGrid/MenuGrid.jsx";

const ShopHomeScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <AddressBar/>
      <ShopGreetingHeader/>
      <ShopStatusRow/>
      <MenuGrid/>
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
    paddingVertical: 25,
  },
});

export default ShopHomeScreen;
