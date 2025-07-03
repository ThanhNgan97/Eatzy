import { StyleSheet, Platform, Dimensions } from "react-native";
import fonts from "../../../constants/fonts";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F5",
    alignItems: "center",
    justifyContent: "center",
    padding: width * 0.07,
  },

  avatar: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 0.15,
    marginBottom: height * 0.04,
  },

  title: {
    fontSize: width * 0.08,
    color: "#68BD6C",
    textAlign: "center",
    fontFamily: fonts.HelveticaNeueMedium,
  },

   subtitle: {
    fontSize: width * 0.08,
    color: "#68BD6C",
    marginBottom: height * 0.05,
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
    marginRight: width * 0.03,
  },

  input: {
    flex: 1,
    color: "#444",
    fontSize: width * 0.04,
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
    fontFamily: fonts.HelveticaNeueMedium,
  },

  containerResetPassword:{
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginBottom:height*0.2
  }
});

export default styles
