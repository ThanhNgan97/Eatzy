import { StyleSheet, Platform } from "react-native";
import fonts from "../../../constants/fonts";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 3 },
      },
      android: {
        elevation: 3,
      },
    }),
    overflow: Platform.OS === "ios" ? "hidden" : "visible",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  orderId: {
    fontSize: Platform.OS === "ios" ? 18 : 17,
    fontWeight: "700",
    color: "#4CAF50",
    fontFamily: fonts.HelveticaNeueBold,
  },

  distance: {
    fontSize: 14,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  timeBox: {
    backgroundColor: "#C24C4C",
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === "ios" ? 4 : 3,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  timeText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  label: {
    marginTop: 8,
    fontSize: 14,
    color: "#333",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  destinationRow: {
    flexDirection: "row",
    marginTop: 4,
    marginBottom: 8,
    flexWrap: "wrap",
  },

  bold: {
    fontFamily: fonts.HelveticaNeueBold,
  },

  address: {
    color: "#333",
    flex: 1,
    fontSize: 13,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  price: {
    color: "#68BD6C",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: fonts.HelveticaNeueBold,
  },

  takeButton: {
    backgroundColor: "#68BD6C",
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === "ios" ? 8 : 6,
    borderRadius: 20,
    alignSelf: "flex-start",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },

  takeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontFamily: fonts.HelveticaNeueMedium,
    fontSize: 14,
  },
});

export default styles;
