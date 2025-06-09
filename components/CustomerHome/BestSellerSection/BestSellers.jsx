import { View, Text, ScrollView, StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";
import BestSellerItem from "./BestSellerItem";


const data = [
  {
    name: "Melting Cheese Pizza",
    price: "10.99",
    image: require("../../../assets/images/CustomerHome/Pizza/Pizza.png"),
    restaurant: "Pizzahut Mậu Thân",
    time: 22,
  },
  {
    name: "Melting Cheese Pizza",
    price: "9.99",
    image: require("../../../assets/images/CustomerHome/Pizza/Pizza.png"),
    restaurant: "Texas Mậu Thân",
    time: 22,
  },

  {
    name: "Melting Cheese Pizza",
    price: "9.99",
    image: require("../../../assets/images/CustomerHome/Pizza/Pizza.png"),
    restaurant: "Texas Mậu Thân",
    time: 22,
  },
  {
    name: "Melting Cheese Pizza",
    price: "9.99",
    image: require("../../../assets/images/CustomerHome/Pizza/Pizza.png"),
    restaurant: "Texas Mậu Thân",
    time: 22,
  },
];

const BestSellers = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Best Sellers</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <BestSellerItem key={index} {...item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },

  title: {
    fontSize: 20,
    marginBottom: 12,
    fontFamily: fonts.HelveticaNeueBold,
  },
});

export default BestSellers;
