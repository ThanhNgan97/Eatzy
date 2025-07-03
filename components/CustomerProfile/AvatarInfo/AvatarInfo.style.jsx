import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

const styles = StyleSheet.create({
  avatarWrapper: {
    alignItems: "center",
    marginTop: -40, 
    zIndex: 999,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
    backgroundColor: "#eee", 
  },

  name: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 8,
    fontFamily: fonts.HelveticaNeueBold,
    color: "#222222",
  },

  profileInfo: {
    marginTop: 0,
    alignItems: "center",
  },

  addressContainer: {
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: "#DFF5E3",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginTop: 6,
    alignItems: "center",
  },

  addressText: {
    color: "#68BD6C",
    marginLeft: 6,
    fontSize: 13,
    fontFamily: fonts.HelveticaNeueMedium,
  },
});

export default styles;
