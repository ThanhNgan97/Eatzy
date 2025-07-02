import { StyleSheet, Dimensions } from "react-native";
import fonts from "../../../constants/fonts";
const { height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
    paddingTop: 30,
  },

  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DFF0E1",
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 999,
    alignSelf: "center",
    marginTop: 16,
  },

  addressText: {
    color: "#4CAF50",
    marginLeft: 6,
    fontSize: 13,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  mapWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  mapText: {
    fontSize: 16,
    fontWeight: "bold",
  },

  profileCard: {
    backgroundColor: "white",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
    fontFamily: fonts.HelveticaNeueBold,
  },

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
  },

  balanceAmount: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 4,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  getOrderButton: {
    backgroundColor: "#68BD6C",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 999,
  },

  getOrderText: {
    color: "white",
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueBold,
  },
});
