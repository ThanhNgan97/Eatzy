import { Dimensions, StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  card: {
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    alignItems: "center",
  },

  image: {
    width: 110,
    height: 120,
    resizeMode: "contain",
  },

  name: {
    fontWeight: fonts.HelveticaNeueMedium,
    fontSize: 12,
    textAlign: "center",
  },

  price: {
    fontSize: 14,
    color: "#7e7e7e",
    marginBottom: 0,
  },


  bestShellerIconRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    alignSelf: "flex-start",  
    justifyContent: "space-between",
    width: '100%',       
  },

  infoColumn:{
    flexDirection: "column",
    alignItems: "center",
    marginTop: 2,
    textAlign: "left",       
    alignSelf: "flex-start"
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    textAlign: "left",       
    alignSelf: "flex-start"
  },

  restaurant: {
    marginLeft: 4,
    fontSize: 10,
    color: "#7e7e7e",
  },

  time: {
    marginLeft: 4,
    fontSize: 10,
    color: "#7e7e7e",
  },

  addIcon:{
  marginTop: 5,
  backgroundColor:'#68BD6C',
  borderRadius: 5,
  width: width * 0.06,        
  height: width * 0.06,       
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'flex-start',
  }
});
