import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop:-20  
  },

  title: {
    fontSize: 16,
    marginBottom: 16,
    fontFamily: fonts.HelveticaNeueMedium,
    color:'#484C4D'
  },

  card: {
  backgroundColor: "#fff",
  borderRadius: 15,
  padding: 10,
  marginBottom: 12,
},

row: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
},

column: {
  flexDirection:'column',
  padding:4
},

name: {
  fontSize: 14,
  marginLeft: 10,
  flex: 1,
  fontFamily:fonts.HelveticaNeueBold
},

phone: {
  fontSize: 12,
  color: "#B4B4B4",
  fontFamily:fonts.HelveticaNeueMedium,
  paddingLeft:25
},

address: {
  fontSize: 12,
  color: "#7e7e7e",
  marginTop: 4,
  fontFamily:fonts.HelveticaNeueMedium,
  paddingLeft:25
},

defaultTag: {
  fontSize: 10,
  color: "#4CAF50",
  marginLeft: 10,
},

editButton: {
  marginLeft: 8,
},

editText: {
  color: "#68BD6C",
  fontSize: 12,
},

defaultTagContainer: {
  marginTop: 4,
  alignSelf: 'flex-start',
  paddingHorizontal: 10,
  paddingVertical: 4,
  borderWidth: 1,
  borderColor: '#68BD6C',
  borderRadius: 10,
  backgroundColor: '#fff', 
  marginLeft:25
},

defaultTag: {
  color: '#68BD6C',
  fontSize: 11,
  fontFamily:fonts.HelveticaNeueMedium
},


});

export default styles;
