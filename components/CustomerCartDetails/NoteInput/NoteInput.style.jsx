import { StyleSheet } from 'react-native';
import fonts from '../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  label: {
    fontSize: 16,
    color: '#484C4D',
    marginRight: 8,
    fontFamily:fonts.HelveticaNeueBold
  },

  optionalTag: {
    backgroundColor: '#d6ebda',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 15,
  },

  optionalText: {
    fontSize: 12,
    color: '#68BD6C',
    fontWeight: '500',
  },

  input: {
    height: 100,
    borderWidth: 1,
    borderColor: '#68BD6C',
    borderRadius: 15,
    padding: 12,
    fontSize: 14,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    color:'#7e7e7e',
    fontFamily:fonts.HelveticaNeueMediumItalic
  },
});

export default styles
