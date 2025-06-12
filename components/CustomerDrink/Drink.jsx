import { View, Text, StyleSheet, ScrollView } from "react-native";
import fonts from "../../constants/fonts";
import DrinkItems from "./DrinkItems";
import drinksData from './drinkData'

const Dessert = () => {
  
  const mergedDesserts = [
    ...drinksData.breakfast,
    ...drinksData.lunch,
    ...drinksData.dinner,
  ];

  
  const groupedDesserts = [];
  for (let i = 0; i < mergedDesserts.length; i += 2) {
    groupedDesserts.push(mergedDesserts.slice(i, i + 2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dessert</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {groupedDesserts.map((row, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {row.map((item, index) => (
              <DrinkItems key={index} {...item} />
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
    marginTop: -30,
  },
  title: {
    fontSize: 18,
    marginBottom: 12,
    fontFamily: fonts.HelveticaNeueMedium,
    color: "#1E1E1E",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
});

export default Dessert;
