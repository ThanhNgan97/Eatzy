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

});

export default styles;
