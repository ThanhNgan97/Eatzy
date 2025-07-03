import { View, Text, TouchableOpacity } from "react-native";
import styles from "./MenuGrid.style";
import DynamicIcon from "../../../../shared/Icons/DynamicIcon";

const menuItems = [
  { icon: "shopping-cart", label: "Orders" },
  { icon: "book-open", label: "Menu" },
  { icon: "star", label: "Ratings" },
  { icon: "trending-up", label: "Promotions" },
];

const MenuGrid = () => {
  return (
    <View style={styles.menuRow}>
      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.menuItem}>
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
