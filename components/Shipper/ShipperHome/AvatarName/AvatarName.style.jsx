import { StyleSheet } from "react-native";
import fonts from "../../../../constants/fonts";

export default StyleSheet.create({
  container: {
    alignItems: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
    fontFamily: fonts.HelveticaNeueBold,
  },
});
