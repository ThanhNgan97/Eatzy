import { StyleSheet } from 'react-native';
import fonts from '../../../constants/fonts';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#68BD6C',
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  iconBox: {
    padding: 6,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#f9f7ea',
    borderRadius: 4,
  },

  quantityText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginHorizontal: 6,
  },

  cartButton: {
    backgroundColor: '#68BD6C',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 30,
  },
  
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily:fonts.HelveticaNeueMedium
  },
});

export default styles
