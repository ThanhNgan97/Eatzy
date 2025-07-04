import { View, ScrollView, StyleSheet } from "react-native";
import CartDeliciousItem from "./CartDeliciousItem";
import cartDeliciousData from "./cartDeliciousData";

const CartDelicious = () => {

  return (
    <View style={styles.container}>
      <View style={styles.scrollWrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartDeliciousData.map((item, index) => (
            <CartDeliciousItem key={index} {...item}/>
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
  scrollWrapper: {
    maxHeight: 400,
  },
});

export default CartDelicious;
