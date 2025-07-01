import { View, Text, Image, TouchableOpacity } from "react-native";
import DynamicIcon from "../../shared/Icons/DynamicIcon";
import { useNavigation } from "@react-navigation/native";
import styles from "./Drink.style";

const DrinkItems = ({ name, price, image, time }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("CustomerCartDetailScreen", {
      name,
      price,
      image,
      time,
    });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>
        {Number(price * 1000).toLocaleString("vi-VN")} đ
      </Text>
      <View style={styles.bestShellerIconRow}>
        <View style={styles.infoColumn}>
          <View style={styles.infoRow}>
            <DynamicIcon
              type="MaterialCommunityIcons"
              name="clock-time-nine-outline"
              size={14}
              color="#7e7e7e"
            />
            <Text style={styles.time}>{time} min</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.addIcon}>
          <DynamicIcon
            type="Ionicons"
            name="add-outline"
            size={15}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default DrinkItems;
