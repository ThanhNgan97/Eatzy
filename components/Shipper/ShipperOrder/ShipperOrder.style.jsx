import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

export default StyleSheet.create({
  container: {
    padding: 16,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  orderId: {
    fontSize: 18,
    fontWeight: "700",
    color: "#4CAF50",
  },

  distance: {
    fontSize: 14,
    fontWeight: "500",
  },

  timeBox: {
    backgroundColor: "#C24C4C",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  timeText: {
    color: "#fff",
    fontSize: 12,
  },

  label: {
    marginTop: 8,
    fontSize: 14,
    color: "#333",
  },

  destinationRow: {
    flexDirection: "row",
    marginTop: 4,
    marginBottom: 8,
    flexWrap: "wrap",
  },

  bold: {
    fontWeight: "600",
  },

  address: {
    color: "#333",
    flex: 1,
    fontSize: 13,
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
