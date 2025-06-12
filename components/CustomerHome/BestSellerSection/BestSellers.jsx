import { View, Text, ScrollView, StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";
import BestSellerItem from "./BestSellerItem";
import bestSheller from './bestSellerData'

const BestSellers = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Best Sellers</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {bestSheller.map((item, index) => (
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
