import { StyleSheet, Platform } from "react-native";
import fonts from "../../constants/fonts";

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 20,
    marginHorizontal: 40,
    marginVertical: 10,
    height: 45,
    paddingVertical: Platform.OS === "android" ? 8 : 6,

  },

  searchIcon: {
    marginRight: 10,
  },

input: {
  flex: 1,
  fontSize: 14,
  color: "#7e7e7e",
  fontFamily: fonts.HelveticaNeueMedium,
  height: 40, 
  paddingVertical: 0,
  justifyContent:'center',
  alignItems:'center'
},

});

export default styles;
