import { StyleSheet, Platform } from "react-native";
import fonts from "../../../constants/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
    paddingHorizontal: 16,
    paddingTop: 8,
  },

  tabRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    gap: 80,
    marginBottom: 5,
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
    backgroundColor: "#E1F3E3",
    paddingVertical: Platform.OS === "ios" ? 8 : 4,
    paddingHorizontal: 10,
    borderRadius: 15,
    alignSelf: "center",
    margin: 10,

  },

  addButtonText: {
    color: "#68BD6C",
    fontSize: 12,
    fontFamily: fonts.HelveticaNeueBold,
  },

  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 8,
  },

  categoryText: {
    fontSize: Platform.OS === "ios" ? 18 : 16,
    fontFamily: fonts.HelveticaNeueBold,
    color: "#5D5D5D",
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginBottom: 12,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "#DADADA",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 3,
      },
    }),
  },

  itemImage: {
    width: 40,
    height: 40,
    borderRadius: 24,
    marginRight: 12,
  },

  itemInfo: {
    flex: 1,
  },

  itemName: {
    fontSize: 15,
    color: "#333",
    fontFamily: fonts.HelveticaNeueMedium,
    marginBottom: 2,
  },

  itemPrice: {
    fontSize: 12,
    color: "#7E7E7E",
    fontFamily: fonts.HelveticaNeueMedium,
  },
});

export default styles
