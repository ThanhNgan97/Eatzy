import { StyleSheet } from "react-native";
import fonts from "../../../../constants/fonts";

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontFamily: fonts.HelveticaNeueBold,
    color: "#333",
    marginBottom: 12,
    paddingHorizontal: 20,
    marginTop: 16,
  },

  orderList: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default styles;
