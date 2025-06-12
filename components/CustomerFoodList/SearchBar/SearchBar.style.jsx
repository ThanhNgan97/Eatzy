import { StyleSheet } from 'react-native';
import fonts from '../../../constants/fonts';

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 2,
    marginHorizontal: 40,
    marginVertical: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#7e7e7e',
    fontFamily:fonts.HelveticaNeueMedium
  },
});

export default styles;
