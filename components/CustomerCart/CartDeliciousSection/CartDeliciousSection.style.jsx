import { StyleSheet } from 'react-native';
import fonts from '../../../constants/fonts';

export default StyleSheet.create({
  card: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 12,
  },

  content: {
    flex: 1,
  },

  name: {
    fontSize: 14,
    color: '#7e7e7e',
    marginBottom: 4,
    fontFamily:fonts.HelveticaNeueMedium
  },

  price: {
    fontSize: 16,
    color: '#33363F',
    fontFamily:fonts.HelveticaNeueBold
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop:40
  },

  iconButton: {
    backgroundColor: '#68BD6C',
    width: 20,
    height: 20,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  quantityText: {
    fontSize: 14,
    marginHorizontal: 4,
  },
});
