import { StyleSheet } from 'react-native';
import fonts from '../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  rectangleInputName: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  addressText: {
    fontSize: 14,
    color: '#484C4D',
    fontFamily: fonts.HelveticaNeueBold,
    marginBottom: 8,
  },
  nameText: {
   fontSize: 12, 
    color: '#7e7e7e', 
    fontFamily: fonts.HelveticaNeueMedium 
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueMedium,
  },
  clearButton: {
    paddingLeft: 8,
  },
});

export default styles;
