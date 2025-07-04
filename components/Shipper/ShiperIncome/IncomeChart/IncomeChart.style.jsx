import { StyleSheet } from "react-native";
import fonts from "../../../../constants/fonts";

export default StyleSheet.create({
  chartContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 1,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 12,
  },
  activeTab: {
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#333",
  },
  inactiveTab: {
    fontSize: 16,
    color: "#999",
    fontFamily: fonts.HelveticaNeueMedium,
  },
  sectionTitle: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
    fontFamily: fonts.HelveticaNeueMedium,
  },
  totalIncome: {
    fontSize: 22,
    marginBottom: 16,
    color: "#000",
    fontFamily: fonts.HelveticaNeueBold,
  },
  barRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  barDate: {
    width: 50,
    fontSize: 14,
    color: "#333",
    textAlign: "left",
    fontFamily: fonts.HelveticaNeueMedium,
  },
  barWrapper: {
    flex: 1,
    height: 12,
    backgroundColor: "#e0e0e0",
    borderRadius: 6,
    marginHorizontal: 8,
    overflow: "hidden",
  },
  bar: {
    height: "100%",
    backgroundColor: "#68BD6C",
    borderRadius: 6,
  },
  barValue: {
    width: 90,
    fontSize: 13,
    color: "#333",
    textAlign: "right",
    fontFamily: fonts.HelveticaNeueMediumItalic,
  },
});
