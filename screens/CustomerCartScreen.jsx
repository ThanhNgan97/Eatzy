import { ScrollView, StyleSheet } from "react-native";
import CartDelicious from '../components/CustomerCart/CartDeliciousSection/CartDelicious';
import VoucherSection from "../components/CustomerCart/VoucherSection";
import CartSummary from "../components/CustomerCart/CartSummary";

const CustomerCartScreen = () => {
  return (
   <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <CartDelicious/>
        <VoucherSection/>
        <CartSummary/>
   </ScrollView>
  )
}

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

export default CustomerCartScreen
