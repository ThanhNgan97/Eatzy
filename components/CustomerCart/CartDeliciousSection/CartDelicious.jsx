import { View, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CartDeliciousItem from "./CartDeliciousItem";
import cartDeliciousData from "./cartDeliciousData";

const CartDelicious = () => {
  const navigation = useNavigation();

  const handlePressItem = () => {
    navigation.navigate("Home", {
    screen: "CustomerCartDetailScreen",
});

  };

  return (
    <View style={styles.container}>
      <View style={styles.scrollWrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartDeliciousData.map((item, index) => (
            <CartDeliciousItem key={index} {...item} onPress={handlePressItem} />
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
