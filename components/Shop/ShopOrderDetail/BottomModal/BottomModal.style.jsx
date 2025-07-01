import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

const styles = StyleSheet.create({
modalContainer: {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  backgroundColor: '#f9f9f9',
  paddingTop: 20,     
  paddingBottom: 70,  
  paddingHorizontal: 20,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center', 
  borderTopLeftRadius: 12,
  borderTopRightRadius: 20,
  elevation: 8,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: -2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
},

  timeText: {
    fontSize: 16,
    color: '#7e7e7e',
    fontFamily:fonts.HelveticaNeueBold
  },

  boldText: {
    fontSize:14,
    fontFamily:fonts.HelveticaNeueBold
  },

  readyButton: {
    backgroundColor: '#68BD6C',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:5
  },

  readyText: {
    color: '#fff',
    fontWeight: '600',
  },

  leftBlock:{
    flexDirection:'column',
  }
});

export default styles