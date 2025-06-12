import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./CategoryList.style";
import { useNavigation } from "@react-navigation/native";
import categories from "./categoriesData";

const screenMap = {
  Food: "CustomerFoodListScreen",
  FastFood: "CustomerFastFoodScreen",
  Drinks: "CustomerDrinksScreen",
  Dessert: "CustomerDessertScreen",
};

const Index = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    const screen = screenMap[category];
    if (screen) {
      navigation.navigate("Home", {
        screen,
        params: { category },
      });
    } else {
      console.log(`No screen mapped for category: ${category}`);
    }
  };

  return (
    <View style={styles.categoryListContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryListRow}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleCategoryPress(item.label)}
              style={styles.categoryListSquare}
            >
              <View style={styles.categoryListColumn}>
                <Text style={styles.categoryListIcon}>{item.icon}</Text>
                <Text style={styles.categoryListText}>{item.label}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;
