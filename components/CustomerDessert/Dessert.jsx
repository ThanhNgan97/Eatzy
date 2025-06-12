import { View, Text, StyleSheet, ScrollView } from "react-native";
import fonts from "../../constants/fonts";
import dessertData from './dessertData';
import DessertItems from "./DessertItems";

const Dessert = () => {
  const mergedDeserts = [
    ...dessertData.breakfast,
    ...dessertData.lunch,
    ...dessertData.dinner,
  ];

  const groupedDesserts = [];
  for (let i = 0; i < mergedDeserts.length; i += 2) {
    groupedDesserts.push(mergedDeserts.slice(i, i + 2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dessert</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {groupedDesserts.map((row, rowIndex) => (
            <View style={styles.row} key={rowIndex}>
                {row.map((item, index) => (
                <DessertItems key={index} {...item} />
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
