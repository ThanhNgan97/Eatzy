import { StyleSheet, Platform } from "react-native";
import fonts from "../../../../constants/fonts";

const styles = StyleSheet.create({
  menuRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20,
  },

  menuItem: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    marginHorizontal: 4,
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },

  menuText: {
    marginTop: 8,
    fontSize: 12,
    color: "#7e7e7e",
    fontFamily:fonts.HelveticaNeueMedium
  },
});

export default styles;
