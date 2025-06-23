import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

export default StyleSheet.create({
  sectionHeader: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: "#f6f7f8",
  },
  sectionHeaderText: {
    fontSize: 14,
    fontFamily: fonts.HelveticaNeueBold,
    color: "#999",
  },
  locationItem: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  locationContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButton: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#ccc",
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  radioButtonSelected: {
    borderColor: "#00C851",
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#00C851",
  },
  locationText: {
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueMedium,
    color: "#333",
  },
  locationTextSelected: {
    color: "#00C851",
    fontFamily: fonts.HelveticaNeueBold,
  },
  confirmContainer: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  confirmButton: {
    backgroundColor: "#00C851",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  confirmText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueBold,
  },

    sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    color: "#888",
  },
  option: {
    padding: 12,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 8,
  },
  selected: {
    borderColor: "#00C851",
    color: "#00C851",
    fontWeight: "bold",
  },
});
