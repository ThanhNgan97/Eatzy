import { StyleSheet, Dimensions, Platform } from "react-native";
import fonts from "../../../constants/fonts";

const { width, height } = Dimensions.get("window");

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
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: width * 0.125,
    marginBottom: height * 0.03,
  },

  title: {
    fontSize: width * 0.085,
    color: "#68BD6C",
    textAlign: "center",
    fontFamily: fonts.HelveticaNeueMedium,
  },

    subtitle: {
    fontSize: width * 0.085,
    color: "#68BD6C",
    textAlign: "center",
    marginBottom: height * 0.02,
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
    marginBottom: height * 0.025,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
      },
      android: {
        elevation: 4
      },
    }),
  },

  icon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: width * 0.042,
    color: "#222222",
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

  link: {
    marginTop: height * 0.03,
    fontSize: width * 0.04,
    color: "#7C7C7C",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  loginText: {
    color: "#7C7C7C",
    fontFamily: fonts.HelveticaNeueBold,
  },

  containerRegister:{
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginBottom:height*0.1
  }
});

export default styles;
