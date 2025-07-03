import { StyleSheet, Dimensions, Platform } from "react-native";
import fonts from "../../../constants/fonts";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3F6F5",
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.05,
  },

  avatar: {
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: width * 0.35,
    marginBottom: height * 0.04,
  },

  title: {
    fontSize: width * 0.08,
    color: "#68BD6C",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  subtitle: {
    fontSize: width * 0.08,
    color: "#68BD6C",
    marginBottom: height * 0.05,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  loginButton: {
    backgroundColor: "#68BD6C",
    paddingVertical: height * 0.015,
    borderRadius: 100,
    marginBottom: height * 0.025,
    width: width * 0.9,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },

  loginButtonText: {
    color: "#fff",
    fontSize: width * 0.05,
    textAlign: "center",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  signUpButton: {
    backgroundColor: "#DADADA",
    paddingVertical: height * 0.015,
    borderRadius: 100,
    marginBottom: height * 0.025,
    width: width * 0.9,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },

  signUpButtonText: {
    color: "#6E6E6E",
    fontSize: width * 0.05,
    textAlign: "center",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  orText: {
    color: "#7E7E7E",
    fontSize: width * 0.04,
    marginBottom: height * 0.02,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },

  icon: {
    marginHorizontal: 10,
  },

  loginWithSection: {
  marginTop: 'auto',
  alignItems: 'center',
  marginBottom: 40,
},

headerSection: {
  alignItems: "center",
  marginBottom: 20,
},

buttonSection: {
  width: "100%",
  alignItems: "center",
},

containerAvatar:{
  justifyContent:'center',
  alignItems:'center',
  marginTop:90
},

socialIcon: {
  width: 20,
  height: 20,
},

});
