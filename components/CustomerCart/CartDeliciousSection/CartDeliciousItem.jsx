import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./CartDeliciousSection.style";
import DynamicIcon from "../../../shared/Icons/DynamicIcon";
import { useNavigation } from "@react-navigation/native";

const CartDeliciousItem = ({ name, price, image }) => {
  const navigation = useNavigation();

  const formatVND = (value) => {
    const number = parseFloat(value);
    return `${number.toLocaleString("vi-VN")} đ`;
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Home", { screen: "CustomerCartDetailScreen" })}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{formatVND(price)}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <DynamicIcon type="Ionicons" name="remove" size={14} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>1</Text>
          <TouchableOpacity style={styles.iconButton}>
            <DynamicIcon type="Ionicons" name="add-outline" size={14} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CartDeliciousItem;
