import { Dimensions, Platform, StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAF7",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: width * 0.07,
    paddingVertical: height * 0.05,
  },

  avatar: {
    width: width * 0.28,
    height: width * 0.28,
    borderRadius: width * 0.14,
    marginBottom: height * 0.03,
  },

  title: {
    fontSize: width * 0.08,
    color: "#68BD6C",
    textAlign: "center",
    // marginBottom: height * 0.04,
    fontFamily: fonts.HelveticaNeueMedium,
  },

    subtitle: {
    fontSize: width * 0.08,
    color: "#68BD6C",
    textAlign: "center",
    marginBottom: height * 0.04,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    height: height * 0.075,
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  icon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: width * 0.04,
    color: "#7C7C7C",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 20,
    fontSize: width * 0.04,
    color: "#7C7C7C",
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
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: width * 0.05,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  containerSignUp:{
    marginTop:15
  },

  containerButton:{
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },

  link: {
    fontSize: width * 0.04,
    color: "#7C7C7C",
    textAlign: "center",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  signupText: {
    color: "#7C7C7C",
    fontFamily:fonts.HelveticaNeueBold
  },

  orText: {
    color: "#7E7E7E",
    fontSize: width * 0.04,
    marginBottom: height * 0.02,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  socialIcons: {
    flexDirection: "row",
    marginTop: 10,
    gap: 20,
  },

  iconSpacing: {
    marginRight: 15,
  },

loginWithSection: {
  marginTop: 'auto',
  alignItems: 'center',
  marginBottom: 40,
},

  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },

socialIcon: {
  width: 20,
  height: 20,
},

containerLogin:{
  justifyContent:'center',
  alignItems:'center',
  alignSelf:'center',
  marginTop:60
}

})

export default styles
