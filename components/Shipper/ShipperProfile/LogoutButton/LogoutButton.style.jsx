import { StyleSheet } from "react-native";
import fonts from "../../../../constants/fonts";

const styles = StyleSheet.create({
  logoutButton: {
    alignSelf: "center",
    backgroundColor: "#68BD6C",
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 60,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueBold,
  },
});

export default styles;
