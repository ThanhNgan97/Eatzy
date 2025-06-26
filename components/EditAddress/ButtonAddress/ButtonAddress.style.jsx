import { StyleSheet } from 'react-native';
import fonts from '../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  rectangleDelete: {
    backgroundColor: '#F5F5F5',
    width:130,
    borderRadius: 20,
    borderWidth:1,
    borderColor:"#68BD6C",
    justifyContent:'center',
    alignItems:'center',
    height:45

  },

  textDelete: {
    color: '#68BD6C',
    fontSize: 14,
    fontFamily:fonts.HelveticaNeueBold
  },

  rectangleComplete: {
    backgroundColor: '#68BD6C',
    borderRadius: 20,
    justifyContent:'center',
    alignItems:'center',
    width:130,
    height:45


  },

  textComplete: {
    color: '#fff',
    fontSize: 14,
    fontFamily:fonts.HelveticaNeueBold
  },

    alertContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
  },

  alertTitle: {
    color: "#68BD6C",
    fontSize: 16,
    fontFamily:fonts.HelveticaNeueBold
  },

  alertMessage: {
    color: "#7e7e7e",
    fontSize: 14,
    fontFamily:fonts.HelveticaNeueMedium
  },

  confirmButton: {
    backgroundColor: "#68BD6C",
    paddingVertical: 10,
    borderRadius: 20,
    fontFamily:fonts.HelveticaNeueBold

  },

  cancelButton: {
    backgroundColor: "#fff",
    paddingVertical: 5,
    borderRadius: 20,
    fontFamily:fonts.HelveticaNeueBold,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#68BD6C',

  },

  confirmText: {
    color: "#fff",
    fontFamily:fonts.HelveticaNeueBold,
    textAlign: "center",
  },

  cancelText: {
    color:'#68BD6C',
    textAlign: "center",
    fontFamily:fonts.HelveticaNeueBold

  },

});

export default styles;
