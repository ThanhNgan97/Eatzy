import { StyleSheet } from "react-native";
import fonts from "../../../../constants/fonts";

export default StyleSheet.create({
  section: {
    marginBottom: 16,
  },

  grayLabel: {
    color: "#777",
    marginBottom: 4,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  address: {
    fontSize: 14,
    color: "#000",
    marginBottom: 8,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  actionButton: {
    backgroundColor: "#fddccf",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: "flex-start",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },

  actionButtonText: {
    color: "#d24d0f",
    fontWeight: "600",
    fontFamily: fonts.HelveticaNeueBold,
  },

  greenButton: {
    backgroundColor: "#d7f5dc",
  },

  greenButtonText: {
    color: "#4CAF50",
    fontWeight: "600",
    fontFamily: fonts.HelveticaNeueBold,
  },
});
