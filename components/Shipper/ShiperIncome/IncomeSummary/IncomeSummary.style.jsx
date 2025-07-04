import { StyleSheet } from "react-native";
import fonts from "../../../../constants/fonts";

export default StyleSheet.create({
  summaryContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    elevation: 1,
    marginBottom: 20,
  },
  summaryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
    fontFamily: fonts.HelveticaNeueMedium,
  },
  orderCount: {
    color: "#333",
    fontFamily: fonts.HelveticaNeueMediumItalic,
  },
  summaryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  symbol: {
    fontSize: 16,
    marginRight: 8,
  },
  summaryLabel: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    fontFamily: fonts.HelveticaNeueMedium,
  },
  summaryValue: {
    fontSize: 14,
    color: "#333",
    fontFamily: fonts.HelveticaNeueMediumItalic,
  },
});
