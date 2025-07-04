import { StyleSheet } from "react-native";

export default StyleSheet.create({
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    color: "#4CAF50",
    fontSize: 16,
    fontWeight: "bold",
  },

  takeButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },

  takeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
