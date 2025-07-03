import { StyleSheet, ScrollView } from "react-native";
import AddressBar from "../../shared/AddressBar";
import GreetingHeader from "../../components/CustomerHome/GreetingHeader";
import CategoryList from "../../components/CustomerHome/CategoryList";
import DiscountBanner from "../../components/CustomerHome/DiscountBanner";
import BestSellers from "../../components/CustomerHome/BestSellerSection/BestSellers";
import Delicious from "../../components/CustomerHome/DeliciousSection/Delicious";

const CustomerHomeScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <AddressBar />
      <GreetingHeader />
      <CategoryList />
      <DiscountBanner />
      <BestSellers />
      <Delicious />
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

export default CustomerHomeScreen;
