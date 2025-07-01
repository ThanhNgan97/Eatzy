import { View, Text, ScrollView, StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";
import delicious from "./deliciousData";
import DeliciousItems from "./DeliciousItems"


const Delicious = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food for you</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {delicious.map((item, index) => (
          <DeliciousItems key={index} {...item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical:16,
    paddingHorizontal: 10,
  },

  title: {
    fontSize: 20,
    marginBottom: 12,
    fontFamily:fonts.HelveticaNeueBold,
  },
});

export default Delicious;
