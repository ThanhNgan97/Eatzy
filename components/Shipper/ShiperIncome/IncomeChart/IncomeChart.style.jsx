import { StyleSheet, Platform } from "react-native";
import fonts from "../../../../constants/fonts";

const styles = StyleSheet.create({
  chartContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: Platform.OS === "ios" ? 18 : 16,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 6,
      },
      android: {
        elevation: 2,
      },
    }),
  },

  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 12,
  },

  activeTab: {
    fontSize: Platform.OS === "ios" ? 16 : 15,
    textDecorationLine: "underline",
    color: "#333",
    fontFamily: fonts.HelveticaNeueBold,
  },

  inactiveTab: {
    fontSize: Platform.OS === "ios" ? 16 : 15,
    color: "#999",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  sectionTitle: {
    fontSize: Platform.OS === "ios" ? 14 : 13,
    color: "#333",
    marginBottom: 4,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  totalIncome: {
    fontSize: Platform.OS === "ios" ? 24 : 22,
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
    fontSize: Platform.OS === "ios" ? 14 : 13,
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
    fontSize: Platform.OS === "ios" ? 13 : 12,
    color: "#333",
    textAlign: "right",
    fontFamily: fonts.HelveticaNeueMediumItalic,
  },

  tabText: {
  fontSize: 16,
  fontFamily: fonts.HelveticaNeueBold,
},

activeTab: {
  color: "#68BD6C",
  textDecorationLine: "underline",
},

inactiveTab: {
  color: "#7E7E7E",
},

});

export default styles
