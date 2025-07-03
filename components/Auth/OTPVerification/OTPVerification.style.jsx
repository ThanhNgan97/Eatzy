import { StyleSheet, Platform, Dimensions } from "react-native";
import fonts from "../../../constants/fonts";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
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
    padding: width * 0.06,
    alignItems: "center",
    width: width * 0.85,
    height: height * 0.6,
    backgroundColor: "#F4F8F5",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
      android: {
        elevation: 2,
      },
    }),
  },

  title: {
    fontSize: width * 0.055,
    color: "#68BD6C",
    marginBottom: 10,
    fontFamily: fonts.HelveticaNeueBold,
  },

  subtitle: {
    color: "#68BD6C",
    fontSize: width * 0.04,
    textAlign: "center",
    marginBottom: height * 0.04,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  email: {
    fontFamily: fonts.HelveticaNeueMediumItalic,
  },

  containerOTP: {
    width: "100%",
    alignItems: "center",
    marginBottom: height * 0.25,
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: height * 0.03,
  },

  otpInput: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#68BD6C",
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#fff",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  },

  verifyButton: {
    backgroundColor: "#68BD6C",
    paddingVertical: height * 0.012,
    paddingHorizontal: width * 0.12,
    borderRadius: 50,
    marginBottom: height * 0.02,
    width: width * 0.55,
    alignItems: "center",
  },

  verifyText: {
    color: "#fff",
    fontSize: width * 0.04,
    textAlign: "center",
    fontFamily: fonts.HelveticaNeueBold,
  },

  resendButton: {
    backgroundColor: "#D9D9D9",
    paddingVertical: height * 0.012,
    paddingHorizontal: width * 0.12,
    borderRadius: 50,
    width: width * 0.55,
    alignItems: "center",
  },

  resendText: {
    color: "#7C7C7C",
    fontSize: width * 0.04,
    textAlign: "center",
    fontFamily: fonts.HelveticaNeueBold,
  },
});

export default styles;
