import { StyleSheet } from "react-native"
import fonts from "../../../constants/fonts"

const styles = StyleSheet.create({
  avatarWrapper: {
    position: "relative",
    alignSelf: "center",
    marginBottom: 20,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#f0f0f0",
  },

  cameraIconWrapper: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#68BD6C",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
  },

  
  alertContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    margin: 20,
  },

  alertTitle: {
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueBold,
    color: "#222222",
    textAlign: "center",
  },

  alertMessage: {
    fontSize: 14,
    fontFamily: fonts.HelveticaNeueMedium,
    color: "#7e7e7e",
    textAlign: "center",
  },

  confirmButton: {
    backgroundColor: "#68BD6C",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 10,
    justifyContent:'center',
    alignContent:'center'
  },

  cancelButton: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth:1,
    borderColor:"#68BD6C",
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },

  confirmText: {
    color: "white",
    fontSize: 14,
    fontFamily: fonts.HelveticaNeueMedium,
    textAlign: "center",
  },
  cancelText: {
    color: "#68BD6C",
    fontSize: 14,
    fontFamily: fonts.HelveticaNeueMedium,
    textAlign: "center",
  },
})

export default styles
