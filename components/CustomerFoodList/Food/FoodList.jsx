import { View, Text, StyleSheet, ScrollView } from "react-native";
import fonts from "../../../constants/fonts";
import FoodListItems from "./FoodListItem";
import dailyMeals from "./foodData";

const FoodList = () => {
  const mergedMeals = [
    ...dailyMeals.breakfast,
    ...dailyMeals.lunch,
    ...dailyMeals.dinner,
  ];

  const groupedMeals = [];
  for (let i = 0; i < mergedMeals.length; i += 2) {
    groupedMeals.push(mergedMeals.slice(i, i + 2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {groupedMeals.map((row, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {row.map((item, index) => (
              <FoodListItems key={index} {...item} />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    flex: 1,
    marginTop:-30
  },

  title: {
    fontSize: 20,
    marginBottom: 12,
    fontFamily: fonts.HelveticaNeueBold,
    color:'#1E1E1E'
  },
  
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
});

export default FoodList;
