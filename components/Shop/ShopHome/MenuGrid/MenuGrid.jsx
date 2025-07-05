import { View, Text, TouchableOpacity } from "react-native";
import styles from "./MenuGrid.style";
import DynamicIcon from "../../../../shared/Icons/DynamicIcon";
import { useNavigation } from "@react-navigation/native";

const menuItems = [
  { icon: "shopping-cart", label: "Orders", screen: "OrderScreen" },
  { icon: "book-open", label: "Menu", screen: "ShopMenuScreen" },
  { icon: "star", label: "Ratings", screen: "RatingScreen" },
  { icon: "trending-up", label: "Promotions", screen: "PromotionScreen" },
];

const MenuGrid = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menuRow}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => {
          navigation.getParent()?.navigate(item.screen);
        }}

        >
          <DynamicIcon
            type="Feather"
            name={item.icon}
            size={18}
            color="#68BD6C"
          />
          <Text style={styles.menuText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MenuGrid;
