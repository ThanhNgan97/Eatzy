import { StyleSheet, Dimensions, Platform } from "react-native";
import fonts from "../../../constants/fonts";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "#F4F8F5",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width * 0.07,
  },

  containerForgotPassword: {
    width: "100%",
    alignItems: "center",
    marginBottom:height*0.3
  },

  avatar: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 0.15,
    marginBottom: height * 0.03,
  },

  title: {
    fontSize: width * 0.08,
    color: "#68BD6C",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  inputWrapper: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: width * 0.04,
    paddingHorizontal: width * 0.05,
    width: "100%",
    alignItems: "center",
    marginTop: height * 0.04,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      }, 
    }),
    gap:10
  },

  icon: {
    marginRight: width * 0.04,
  },

  inputLabelColumn: {
    flexDirection: "column",
  },

  inputLabel: {
    fontSize: width * 0.045,
    color: "#68BD6C",
    fontFamily: fonts.HelveticaNeueBold,
  },

  inputHint: {
    fontSize: width * 0.04,
    color: "#A9DAB0",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  button: {
   backgroundColor: "#68BD6C",
    borderRadius: 50,
    paddingVertical: height * 0.015,
    width: width * 0.5,
    alignItems: "center",
    justifyContent:'center',
    alignSelf:'center',
    marginTop: 40,
  },

  buttonText: {
    color: "#fff",
    fontSize: width * 0.045,
    fontFamily: fonts.HelveticaNeueBold,
  },
  
});

export default styles
