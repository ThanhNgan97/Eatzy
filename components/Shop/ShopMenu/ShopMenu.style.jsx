import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
    paddingHorizontal: 16,
    paddingTop: 12,
  },

  tabRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  tabActive: {
    fontSize: 16,
    color: "#68BD6C",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  tabInactive: {
    fontSize: 16,
    color: "#000",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 14,
    fontFamily: fonts.HelveticaNeueMediumItalic,
    marginBottom: 12,
  },

  addButton: {
    backgroundColor: "#E2FEE2",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignSelf: "center",
    marginBottom: 16,
  },

  addButtonText: {
    color: "#68BD6C",
    fontSize: 14,
    fontFamily: fonts.HelveticaNeueBold,
  },

  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 8,
  },

  categoryText: {
    fontSize: 20,
    fontFamily: fonts.HelveticaNeueBold,
    color: "#5D5D5D",
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 12,
    marginBottom: 12,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "#DADADA",
  },

  itemImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },

  itemInfo: {
    flex: 1,
  },

  itemName: {
    fontSize: 16,
    color: "#333",
    fontFamily: fonts.HelveticaNeueMedium,
    marginBottom: 2,
  },

  itemPrice: {
    fontSize: 16,
    color: "#7E7E7E",
    fontFamily: fonts.HelveticaNeueMedium,
  },
});
