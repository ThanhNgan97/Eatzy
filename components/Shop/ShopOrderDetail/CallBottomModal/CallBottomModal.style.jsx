import { Dimensions, StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: "'rgba(0,0,0,0.3)'",
  },

  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
    fontFamily:fonts.HelveticaNeueBold
  },
  
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 21,
    marginRight: 12,
  },

  info: {
    flex: 1,
    flexDirection:'row',
    gap:10
  },

  name: {
    fontSize: 14,
    color: '#333',
    fontFamily:fonts.HelveticaNeueBold,
    flexWrap: 'wrap',
  },

  phone: {
    fontSize: 12,
    color: '#7e7e7e',
    fontFamily:fonts.HelveticaNeueMedium,
  },

  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconWrapper: {
  width: 30,
  height: 30,
  borderRadius: 16,
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 8,
  backgroundColor:"#ECF7EC"
},

role: {
  fontSize: 10,
  color: '#68BD6C',
  marginBottom: 2,
  fontFamily:fonts.HelveticaNeueMedium
},

rectangleRole:{
  width: width*0.16,
  height: 16,
  borderRadius: 16,
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 8,
  backgroundColor:"#ECF7EC",
  marginTop:10
},

column:{
    flexDirection:'column',
}

});


export default styles