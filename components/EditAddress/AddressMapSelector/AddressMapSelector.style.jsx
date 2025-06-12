import { StyleSheet, Dimensions } from 'react-native';
import fonts from '../../../constants/fonts';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    margin: 16,
  },
  label: {
    color: '#999',
    fontSize: 12,
    fontFamily:fonts.HelveticaNeueMedium
  },
  address: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 8,
  },
  map: {
    width: width - 64,
    height: 200,
    borderRadius: 12,
  },
});

export default styles
