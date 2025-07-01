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
    paddingVertical: 16,
    paddingHorizontal: 16,
  },

  selectedHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  sectionHeaderText: {
    fontSize: 12,
    fontFamily:fonts.HelveticaNeueBold,
    color: "#aaa",
  },


  resetText: {
    fontSize: 12,
    color: "#68BD6C",
    fontFamily:fonts.HelveticaNeueBold
  },


  selectedItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginVertical: 4,
  },

  radioOuterSelected: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#68BD6C",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  radioInnerSelected: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#68BD6C",
  },
  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: "#aaa",
    marginRight: 8,
  },
 
  selectedText: {
    fontSize: 14,
    color: "#333",
  },
  
  sectionTitle: {
    marginTop: 12,
    fontSize: 14,
    fontFamily:fonts.HelveticaNeueBold,
    color: "#aaa",
  },

  listContainer: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },

  item: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
  },

  selectedItem: {
    backgroundColor: "#f5fff5", 
  },

  itemText: {
    fontSize: 16,
    color: "#333",
  },

  radioInnerGray: {
  width: 10,
  height: 10,
  borderRadius: 5,
  backgroundColor: '#ccc', // xám
},
});

export default styles