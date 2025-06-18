import { StyleSheet } from 'react-native';
import fonts from '../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    margin:16
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  allText: {
    fontSize: 14,
    color: '#7e7e7e',
    fontFamily:fonts.HelveticaNeueMedium
  },

  allPrice: {
    fontSize: 14,
    color: '#7e7e7e',
    fontFamily:fonts.HelveticaNeueBold
  },

    totalText: {
    fontSize: 18,
    fontFamily:fonts.HelveticaNeueBold,
    color: '#68BD6C', 
  },

  totalPrice: {
    fontSize: 18,
    color: '#68BD6C', 
    fontFamily:fonts.HelveticaNeueBold
  },


});

export default styles