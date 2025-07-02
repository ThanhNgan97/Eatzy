import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3F6F5",
    padding: 20,
  },

  avatar: {
    width: 143,
    height: 143,
    borderRadius: 143,
    marginBottom: 30,
  },

  title: {
    fontSize: 36,
    color: "#68BD6C",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  subtitle: {
    fontSize: 36,
    color: "#68BD6C",
    marginBottom: 40,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  loginButton: {
    backgroundColor: "#68BD6C",
    paddingVertical: 16,
    paddingHorizontal: 80,
    borderRadius: 50,
    marginBottom: 20,
    width: 353,
  },

  loginButtonText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  signUpButton: {
    backgroundColor: "#DADADA",
    paddingVertical: 16,
    paddingHorizontal: 80,
    borderRadius: 50,
    marginBottom: 30,
    width: 353,
  },

  signUpButtonText: {
    color: "#6E6E6E",
    fontSize: 20,
    textAlign: "center",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  orText: {
    color: "#7E7E7E",
    fontSize: 16,
    marginBottom: 10,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  socialContainer: {
    flexDirection: "row",
    gap: 20,
  },

  icon: {
    marginTop: 10,
    marginHorizontal: 20,
  },
});
