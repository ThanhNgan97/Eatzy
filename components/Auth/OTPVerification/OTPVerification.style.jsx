import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F5",
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    borderWidth: 1,
    borderColor: "#68BD6C",
    borderRadius: 16,
    padding: 30,
    alignItems: "center",
    width: "85%",
    backgroundColor: "#F4F8F5",
  },

  title: {
    fontSize: 22,
    color: "#68BD6C",
    marginBottom: 10,
    fontFamily: fonts.HelveticaNeueBold,
  },

  subtitle: {
    color: "#68BD6C",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 30,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  email: {
    fontFamily: fonts.HelveticaNeueMediumItalic,
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 30,
  },

  otpInput: {
    width: 50,
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#68BD6C",
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#fff",
  },

  verifyButton: {
    backgroundColor: "#68BD6C",
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 50,
    marginBottom: 15,
    width: 200,
  },

  verifyText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    fontFamily: fonts.HelveticaNeueBold,
  },

  resendButton: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 50,
    width: 200,
  },

  resendText: {
    color: "#7C7C7C",
    fontWeight: 500,
    fontSize: 14,
    textAlign: "center",
    fontFamily: fonts.HelveticaNeueBold,
  },
});
