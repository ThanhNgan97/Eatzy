import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

const styles = StyleSheet.create({
  orderItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  orderImage: {
    width: 50,
    height: 50,
    borderRadius: 12,
    marginRight: 12,
    backgroundColor: "#eee", 
  },

  orderInfo: {
    flex: 1,
  },

  orderTitle: {
    fontSize: 14,
    fontFamily: fonts.HelveticaNeueBold,
    color: "#222",
    marginBottom: 4,
  },

  orderShop: {
    fontSize: 13,
    fontFamily: fonts.HelveticaNeueMedium,
    color: "#666",
  },
});

export default styles;
