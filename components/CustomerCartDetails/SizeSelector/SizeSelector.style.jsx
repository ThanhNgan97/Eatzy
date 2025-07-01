import { StyleSheet } from 'react-native';
import fonts from '../../../constants/fonts';

const styles = StyleSheet.create({
  selector: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
    marginTop:-15
  },
  option: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: 100,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  optionSelected: {
    borderColor: '#68BD6C',
  },
  radioCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 4, 
  },
  radioCircleUnselected: {
    borderColor: '#ccc',
  },
  radioCircleSelected: {
    borderColor: '#68BD6C',
  },
  innerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#68BD6C',
  },
  label: {
    color: '#7e7e7e',
    marginBottom: 2, 
    textAlign: 'center',
    fontSize: 12,
  },
  price: {
    fontSize: 14,
    color: '#484C4D',
    fontFamily: fonts.HelveticaNeueBold,
  },
});

export default styles;
