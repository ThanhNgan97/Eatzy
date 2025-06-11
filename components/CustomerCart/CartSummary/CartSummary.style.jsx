import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

const styles = StyleSheet.create({
  rectangleCartSummary: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 10,
    marginTop: 16,
  },

  cartSummaryColumn: {
    flexDirection: "column",
    gap: 12,
  },

  cartSummaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  labelText: {
    fontSize: 14,
    color: "#7e7e7e",
    fontFamily: fonts.HelveticaNeueRegular,
  },

  valueText: {
    fontSize: 14,
    color: "#7e7e7e",
    fontFamily: fonts.HelveticaNeueRegular,
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E5E5",
    marginVertical: 4,
  },

  totalLabel: {
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueBold,
    color:"#33363F",
  },

  totalValue: {
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueBold,
    color:"#33363F",
  },
});

export default styles
