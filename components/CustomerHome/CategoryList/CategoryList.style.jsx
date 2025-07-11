import { StyleSheet, Dimensions, Platform } from "react-native";
import fonts from "../../../constants/fonts";

const { width } = Dimensions.get("window");
const isSmallScreen = width < 360;

const styles = StyleSheet.create({
  categoryListContainer: {
    paddingVertical: 16,
  },

  categoryListRow: {
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 12,
  },

  categoryListSquare: {
    width: isSmallScreen ? 64 : 72,
    height: isSmallScreen ? 76 : 85,
    borderRadius: 16,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 10,
  },

  categoryListColumn: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  categoryListIcon: {
    fontSize: isSmallScreen ? 18 : 20,
    marginBottom: 8,
  },

  categoryListText: {
    fontSize: isSmallScreen ? 9 : 10,
    fontFamily: fonts.HelveticaNeueMedium,
    color: "#7e7e7e",
    textAlign: "center",
    flexWrap: "wrap",
    maxWidth: isSmallScreen ? 60 : 70,
  },
});

export default styles;
