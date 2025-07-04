import { StyleSheet } from "react-native";
import fonts from "../../../../constants/fonts";

export default StyleSheet.create({
  container: {
    alignItems: "center",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    marginBottom: 16,
    fontFamily: fonts.HelveticaNeueBold,
  },
});
