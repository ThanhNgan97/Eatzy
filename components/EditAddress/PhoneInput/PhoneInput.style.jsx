
import { StyleSheet } from 'react-native';
import fonts from '../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    marginTop:-25
  },

    rectangleInputPhone: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    color: '#484C4D',
    fontFamily: fonts.HelveticaNeueBold,
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#F8F8F8',
    padding: 10,
    borderRadius: 8,
    fontSize: 14,
    fontFamily: fonts.HelveticaNeueMedium,
    color: '#33363F',
  },

  inputActive: {
    borderColor: '#68BD6C',
    borderWidth: 1,
  },

  textInputPhone:{ 
    flexDirection: 'row', 
    alignItems: 'center' 
  }
});

export default styles;
