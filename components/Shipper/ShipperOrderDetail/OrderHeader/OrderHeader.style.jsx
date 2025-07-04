import { StyleSheet } from "react-native";
import fonts from "../../../../constants/fonts";

export default StyleSheet.create({
  orderTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  orderId: {
    color: "#4CAF50",
    fontWeight: "600",
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueBold,
  },
  cashCollect: {
    fontWeight: "600",
    fontSize: 16,
    color: "#000",
  },
});
