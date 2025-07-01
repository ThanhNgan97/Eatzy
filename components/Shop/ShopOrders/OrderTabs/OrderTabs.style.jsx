import { StyleSheet } from "react-native";
import fonts from "../../../../constants/fonts";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#F4F8F7",
    paddingHorizontal: 16,
  },

  tabItem: {
    position: "relative",
    alignItems: "center",
    paddingHorizontal: 8,
  },

  label: {
    fontSize: 14,
    color: "#313131",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  activeLabel: {
    color: "#68BD6C",
  },

  badge: {
    position: "absolute",
    top: -7,
    right: -10,
    backgroundColor: "#68BD6C",
    borderRadius: 100,
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontFamily: fonts.HelveticaNeueBold,
  },
});

export default styles;
