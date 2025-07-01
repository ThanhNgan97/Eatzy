import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

export default StyleSheet.create({
  container: {
    backgroundColor: "#F4F8F7",
    flex: 1,
    paddingHorizontal: 20,
  },

  totalIncome: {
    fontSize: 26,
    color: "#68BD6C",
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 4,
  },

  dateText: {
    fontSize: 12,
    color: "#000000",
    alignSelf: "center",
    marginBottom: 20,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  listContainer: {
    paddingBottom: 20,
  },

  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E3E3E3",
    alignItems: "center",
  },

  orderId: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2B2B2B",
  },

  orderTime: {
    fontSize: 14,
    color: "#7E7E7E",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  statusBadge: {
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 80,
  },

  shipped: {
    backgroundColor: "#E1F3E3",
  },

  shippedText: {
    color: "#68BD6C",
    fontWeight: "600",
  },

  canceled: {
    backgroundColor: "#FDCBCA",
  },

  canceledText: {
    color: "#B84E4E",
    fontWeight: "600",
  },
});
