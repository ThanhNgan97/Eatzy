import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from "react-native";
import OrderSummary from '../components/CustomerPayment/OrderSummary/index';
import BoughtWithList from "../components/CustomerPayment/BoughtWith/index";
import PaymentMethod from "../components/CustomerPayment/PaymentMethod/index";
import PaymentTotal from "../components/CustomerPayment/PaymentTotal/index";
import fonts from "../constants/fonts";

const CustomerPaymentScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <OrderSummary/>
        <BoughtWithList/>
        <PaymentMethod/>
        <PaymentTotal/>

        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Place my order!</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },
  
  scroll: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  buttonContainer:{
     paddingHorizontal:16
  },

  button: {
    marginTop: 16,
    backgroundColor: '#68BD6C',
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
   
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily:fonts.HelveticaNeueBold
  },
});

export default CustomerPaymentScreen;
