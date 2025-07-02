import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 30,
  },

  title: {
    fontSize: 30,
    color: "#68BD6C",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 14,
    marginVertical: 10,
    width: "100%",
    elevation: 5,
  },

  icon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    color: "#444",
  },

  button: {
    marginTop: 30,
    backgroundColor: "#56AE5A",
    padding: 16,
    borderRadius: 30,
    width: 200,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueMedium,
  },
});
