import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F5",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 30,
  },

  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "#56AE5A",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  inputWrapper: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    width: "100%",
    alignItems: "center",
    marginTop: 40,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  icon: {
    marginRight: 12,
  },

  inputLabel: {
    color: "#56AE5A",
    fontSize: 16,
    fontWeight: "500",
  },

  inputHint: {
    color: "#8BC690",
    fontSize: 14,
    marginTop: 2,
  },

  button: {
    backgroundColor: "#56AE5A",
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginTop: 30,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueBold,
  },
});
