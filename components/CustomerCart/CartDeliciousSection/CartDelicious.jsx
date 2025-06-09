import { View, Text, ScrollView, StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";
import CartDeliciousItem from "./CartDeliciousItem";


const data = [
  {
    name: "Melting Cheese Pizza",
    price: "10.99",
    image: require("../../../assets/images/CustomerHome/Pizza/Pizza.png"),
  },

 {
    name: "Melting Cheese Pizza",
    price: "10.99",
    image: require("../../../assets/images/CustomerHome/Pizza/Pizza.png"),
  },

 {
    name: "Melting Cheese Pizza",
    price: "10.99",
    image: require("../../../assets/images/CustomerHome/Pizza/Pizza.png"),
  },

 {
    name: "Melting Cheese Pizza",
    price: "10.99",
    image: require("../../../assets/images/CustomerHome/Pizza/Pizza.png"),
  },

   {
    name: "Melting Cheese Pizza",
    price: "10.99",
    image: require("../../../assets/images/CustomerHome/Pizza/Pizza.png"),
  },

   {
    name: "Melting Cheese Pizza",
    price: "10.99",
    image: require("../../../assets/images/CustomerHome/Pizza/Pizza.png"),
  },
];

const CartDelicious = () => {
  return (
    <View style={styles.container}>      
      <View style={styles.scrollWrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map((item, index) => (
            <CartDeliciousItem key={index} {...item} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },

  title: {
    fontSize: 20,
    marginBottom: 12,
    fontFamily: fonts.HelveticaNeueBold,
  },

  scrollWrapper: {
    maxHeight: 400, 
  },
});

export default CartDelicious;
