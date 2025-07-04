import { StyleSheet } from "react-native";
import fonts from "../../../../constants/fonts";

export default StyleSheet.create({
  noteBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 2,
    marginBottom: 20,
    padding: 12,
  },

  noteLabel: {
    fontSize: 13,
    color: "#777",
    marginBottom: 4,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  noteText: {
    fontSize: 14,
    color: "#000",
    fontFamily: fonts.HelveticaNeueMedium,
  },
});
