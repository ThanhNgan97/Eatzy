import { StyleSheet, Platform } from "react-native";
import fonts from "../../../../constants/fonts";

const styles = StyleSheet.create({
  summaryContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: Platform.OS === "ios" ? 18 : 16,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },

  summaryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  sectionTitle: {
    fontSize: Platform.OS === "ios" ? 15 : 14,
    color: "#68BD6C",
    marginBottom: 4,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  orderCount: {
    color: "#68BD6C",
    fontSize: Platform.OS === "ios" ? 14 : 14,
    fontFamily: fonts.HelveticaNeueMediumItalic,
  },

  summaryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  symbol: {
    fontSize: Platform.OS === "ios" ? 16 : 15,
    marginRight: 8,
  },

  summaryLabel: {
    flex: 1,
    fontSize: Platform.OS === "ios" ? 14 : 13,
    color: "#333",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  summaryValue: {
    fontSize: Platform.OS === "ios" ? 14 : 13,
    color: "#333",
    fontFamily: fonts.HelveticaNeueMediumItalic,
  },
});

export default styles
