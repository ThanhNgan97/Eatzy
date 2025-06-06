import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

export default StyleSheet.create({
  addressRectangle: {
    backgroundColor: "#E5F4EA",
    borderRadius: 12,
    paddingVertical: 2,
    paddingHorizontal: 10,
    justifyContent:'center',
    alignSelf: "center", 
    flexDirection: "row",    
    alignItems: "center",
  },

  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center'
  },

  addressText: {
    color: "#3E8245",
    fontSize: 10,
    marginLeft: 6,
    fontFamily:fonts.HelveticaNeueMedium
  },
});
