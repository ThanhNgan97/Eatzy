import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAF7",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },

  title: {
    fontSize: 36,
    color: "#68BD6C",
    textAlign: "center",
    marginBottom: 30,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    height: 61,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  icon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  button: {
    backgroundColor: "#68BD6C",
    borderRadius: 50,
    paddingVertical: 14,
    paddingHorizontal: 40,
    marginTop: 10,
    width: 180,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: fonts.HelveticaNeueBold,
  },

  link: {
    marginTop: 20,
    fontSize: 16,
    color: "#7C7C7C",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  loginText: {
    fontWeight: "bold",
    color: "#7C7C7C",
    fontFamily: fonts.HelveticaNeueBold,
  },
});
