import { StyleSheet } from "react-native";
import fonts from "../../../../constants/fonts";

export default StyleSheet.create({
  foodRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  foodImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },

  foodInfo: {
    flex: 1,
  },

  foodName: {
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueBold,
  },

  foodType: {
    fontSize: 14,
    color: "#888",
    marginBottom: 4,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  foodPrice: {
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueBold,
  },

  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
  },

  quantityBtn: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: "#E4F3E4",
    justifyContent: "center",
    alignItems: "center",
  },

  quantityText: {
    fontSize: 18,
    color: "#4CAF50",
  },

  quantityNumber: {
    marginHorizontal: 8,
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueMedium,
  },
});
