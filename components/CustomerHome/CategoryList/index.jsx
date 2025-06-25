import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./CategoryList.style";
import { useNavigation } from "@react-navigation/native";
import categories from "./categoriesData";

const screenMap = {
  food: "CustomerFoodListScreen",
  fastfood: "CustomerFastFoodScreen",
  drinks: "CustomerDrinksScreen",
  dessert: "CustomerDessertScreen",
};

const Index = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (categoryValue) => {
    const screen = screenMap[categoryValue];
    if (screen) {
      navigation.navigate("Home", {
        screen,
        params: { category: categoryValue },
      });
    } else {
      console.log(`No screen mapped for category: ${categoryValue}`);
    }
  };

  return (
    <View style={styles.categoryListContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryListRow}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleCategoryPress(item.value)}
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