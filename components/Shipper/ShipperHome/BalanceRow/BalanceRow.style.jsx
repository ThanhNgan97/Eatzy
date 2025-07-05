import { StyleSheet } from "react-native";
import fonts from "../../../../constants/fonts";

export default StyleSheet.create({
  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },

  balanceBox: {
    backgroundColor: "#EFFEED",
    flex: 1,
    marginHorizontal: 6,
    alignItems: "center",
    padding: 10,
    borderRadius: 12,
  },

  balanceIcon: {
    marginBottom: 6,
  },

  balanceLabel: {
    fontSize: 13,
    fontFamily: fonts.HelveticaNeueBold,
    color:'#7e7e7e'
  },

  balanceAmount: {
    fontSize: 15,
    marginTop: 4,
    fontFamily: fonts.HelveticaNeueMedium,
    color:'#7e7e7e'

  },
});
