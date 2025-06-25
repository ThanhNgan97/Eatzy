import { StyleSheet } from "react-native";
import fonts from "../../constants/fonts";

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
  },
  item: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  selectedItem: {
    backgroundColor: "#f0f0f0",
  },



   scrollContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },

  selectedHeaderContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: "#f6f7f8",
  },

  selectedHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  sectionHeaderText: {
    fontSize: 14,
    fontFamily: fonts.HelveticaNeueBold,
    color: "#999",
  },

  resetText: {
    fontSize: 14,
    color: "#00C851",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  selectedItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
  },

  radioOuter: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: "#ccc",
    marginRight: 8,
  },

  radioOuterSelected: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: "#00C851",
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  radioInnerSelected: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00C851",
  },

  selectedText: {
    fontSize: 14,
    fontFamily: fonts.HelveticaNeueMedium,
    color: "#333",
  },

  sectionTitle: {
    fontSize: 14,
    fontFamily: fonts.HelveticaNeueBold,
    marginTop: 20,
    marginBottom: 8,
    marginHorizontal: 20,
    color: "#888",
  },

  item: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  selectedItem: {
    backgroundColor: "#e6f8ef",
  },

  itemText: {
    fontSize: 16,
    color: "#333",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  selectedItemText: {
    color: "#00C851",
    fontFamily: fonts.HelveticaNeueBold,
  },
});

export default styles