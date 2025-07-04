import { StyleSheet } from "react-native";
import fonts from "../../../../constants/fonts";

export default StyleSheet.create({
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#68BD6C",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  balanceText: {
    color: "white",
    fontSize: 14,
    flex: 1,
    fontFamily: fonts.HelveticaNeueMedium,
  },
  withdrawButton: {
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 999,
  },
  withdrawButtonText: {
    color: "#68BD6C",
    fontFamily: fonts.HelveticaNeueBold,
  },
});
