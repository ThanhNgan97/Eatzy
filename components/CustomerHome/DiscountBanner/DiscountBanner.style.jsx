// DiscountBanner.style.js
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.85;

export default StyleSheet.create({
  container: {
    flex: 1,
    width,
  },

  child: {
  width: width * 0.95,
  height: Math.round((width * 9) / 16),
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  overflow: "hidden",    
  marginRight: width * 0.05,
},

image: {
  width: "100%",
  height: "80%",
  resizeMode: "cover",
  borderRadius:20,
  marginTop:-30
},

});
