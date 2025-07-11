import { Dimensions, Platform, StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

const { width } = Dimensions.get("window");
const isSmallScreen = width < 360;

const styles = StyleSheet.create({
  card: {
    width: width * 0.42, // responsive theo màn hình
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
      },
      android: {
        elevation: 2,
      },
    }),
  },

  image: {
    width: width * 0.3,
    height: width * 0.34,
    resizeMode: "contain",
  },

  name: {
    fontSize: isSmallScreen ? 11 : 12,
    fontFamily: fonts.HelveticaNeueMedium,
    textAlign: "center",
    marginTop: 6,
  },

  price: {
    fontSize: isSmallScreen ? 13 : 14,
    color: "#7e7e7e",
    marginBottom: 0,
    marginTop: 2,
  },

  bestShellerIconRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    alignSelf: "flex-start",
    justifyContent: "space-between",
    width: "100%",
  },

  infoColumn: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 2,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },

  restaurant: {
    marginLeft: 4,
    fontSize: isSmallScreen ? 9 : 10,
    color: "#7e7e7e",
  },

  time: {
    marginLeft: 4,
    fontSize: isSmallScreen ? 9 : 10,
    color: "#7e7e7e",
  },

  addIcon: {
    marginTop: 5,
    backgroundColor: "#68BD6C",
    borderRadius: 5,
    width: width * 0.06,
    height: width * 0.06,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
});

export default styles;
