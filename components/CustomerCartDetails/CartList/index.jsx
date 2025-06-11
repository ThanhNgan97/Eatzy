import { SafeAreaView, View, Text, Image } from "react-native";
import styles from "./CartList.style";
import DynamicIcon from "../../../shared/Icons/DynamicIcon";

const CartList = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.cartListImage}>
          <Image
            source={require("../../../assets/images/CustomerHome/Pizza/Pizza.png")}
            style={styles.image}
          />
        </View>
      

        <View style={styles.column}>
          <Text style={styles.title}>Melting Cheese Pizza</Text>

          <View style={styles.row}>
            <View style={styles.iconSubtitle}>
              <Image
                source={require("../../../assets/images/CustomerHome/Pizza/Break.png")}
                style={styles.icon}
              />
              <Text style={styles.subtitle}>Bánh mì Bơ béo</Text>

            </View>

            <View style={styles.ratingStarCountRow}>
              <DynamicIcon
                type="FontAwesome"
                name="star-o"
                size={16}
                color="#68BD6C"
                style={styles.star}
              />
              <View style={styles.ratingCountRow}>
                <Text style={styles.rating}>4.8</Text>
                <Text style={styles.reviewCount}>[2.2k]</Text>
              </View>

            </View>
          </View>

        </View>
          

      </View>
    </SafeAreaView>
  );
};

export default CartList;
