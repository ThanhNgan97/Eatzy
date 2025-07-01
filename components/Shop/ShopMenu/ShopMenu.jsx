import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Switch,
} from "react-native";
import styles from "./ShopMenu.style";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const sampleData = [
  {
    id: "1",
    category: "Viên chiên đại pháp",
    items: [
      {
        id: "1a",
        name: "Cá viên Phương Tuấn",
        price: "5.000.000₫",
        // image: require("../../assets/images/milk_tea.png"),
        image: {
          uri: "https://cdn2.tuoitre.vn/zoom/700_700/471584752817336320/2025/5/15/jack-ve-que-lam-giau-2-17472863613111184785131-0-34-497-984-crop-17472876049691401366328.jpg",
        },
        active: true,
      },
      {
        id: "1b",
        name: "Viên hẹ hẹ",
        price: "50.000₫",
        image: {
          uri: "https://cdn2.tuoitre.vn/zoom/700_700/471584752817336320/2025/5/15/jack-ve-que-lam-giau-2-17472863613111184785131-0-34-497-984-crop-17472876049691401366328.jpg",
        },
        active: true,
      },
      {
        id: "1c",
        name: "Viên vĩnh viễn",
        price: "55.000₫",
        image: {
          uri: "https://cdn2.tuoitre.vn/zoom/700_700/471584752817336320/2025/5/15/jack-ve-que-lam-giau-2-17472863613111184785131-0-34-497-984-crop-17472876049691401366328.jpg",
        },
        active: true,
      },
    ],
  },
  {
    id: "2",
    category: "Chất lỏng",
    items: [
      {
        id: "2a",
        name: "Tài lộc xanh (330ml)",
        price: "55.000₫",
        // image: require("../../assets/images/milk_tea.png"),
        image: {
          uri: "https://cdn2.tuoitre.vn/zoom/700_700/471584752817336320/2025/5/15/jack-ve-que-lam-giau-2-17472863613111184785131-0-34-497-984-crop-17472876049691401366328.jpg",
        },
        active: true,
      },
      {
        id: "2b",
        name: "Tài lộc vàng (330ml)",
        price: "55.000₫",
        image: {
          uri: "https://cdn2.tuoitre.vn/zoom/700_700/471584752817336320/2025/5/15/jack-ve-que-lam-giau-2-17472863613111184785131-0-34-497-984-crop-17472876049691401366328.jpg",
        },
        active: true,
      },
    ],
  },
];

const ShopMenu = () => {
  const navigation = useNavigation();
  const [menu, setMenu] = useState(sampleData);
  const [expanded, setExpanded] = useState({});

  const toggleCategory = (category) => {
    setExpanded((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const toggleItem = (catIndex, itemIndex) => {
    const newMenu = [...menu];
    newMenu[catIndex].items[itemIndex].active =
      !newMenu[catIndex].items[itemIndex].active;
    setMenu(newMenu);
  };

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabRow}>
        <Text style={styles.tabActive}>Menu</Text>
        <Text style={styles.tabInactive}>Category</Text>
      </View>

      {/* Search & Add */}
      <TextInput
        placeholder="Search in menu ..."
        style={styles.searchInput}
        placeholderTextColor="#DADADA"
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("AddFood")}
        style={styles.addButton}
      >
        <Text style={styles.addButtonText}>Thêm món mới</Text>
      </TouchableOpacity>

      {/* List */}
      {menu.map((cat, catIndex) => (
        <View key={cat.id}>
          <TouchableOpacity
            style={styles.categoryHeader}
            onPress={() => toggleCategory(cat.category)}
          >
            <Text style={styles.categoryText}>{cat.category}</Text>
            <Entypo
              name={expanded[cat.category] ? "chevron-up" : "chevron-down"}
              size={18}
              color="#7e7e7e"
            />
          </TouchableOpacity>

          {expanded[cat.category] !== false && (
            <View>
              {cat.items.map((item, itemIndex) => (
                <View key={item.id} style={styles.menuItem}>
                  <Image source={item.image} style={styles.itemImage} />
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>{item.price}</Text>
                  </View>
                  <Switch
                    value={item.active}
                    onValueChange={() => toggleItem(catIndex, itemIndex)}
                    thumbColor={item.active ? "#5DB075" : "#f4f3f4"}
                    trackColor={{ false: "#ccc", true: "#CFF2D8" }}
                  />
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default ShopMenu;
