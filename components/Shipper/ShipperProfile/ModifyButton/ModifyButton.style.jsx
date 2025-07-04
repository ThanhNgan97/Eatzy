import { StyleSheet } from "react-native";
import fonts from "../../../../constants/fonts";

const styles = StyleSheet.create({
  modifyButton: {
    alignSelf: "center",
    backgroundColor: "#68BD6C",
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    gap: 8,
  },

  modifyText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: fonts.HelveticaNeueBold,
  },
});

export default styles;
