import { StyleSheet } from 'react-native';
import fonts from '../../../constants/fonts';

const styles = StyleSheet.create({

    card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  image: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 14,
    color: '#7e7e7e',
    fontFamily:fonts.HelveticaNeueMedium
  },

    row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    flex: 1,
    },

    wrapper: {
    marginTop: 20,
    paddingHorizontal: 10,
  },

  header: {
    fontSize: 16,
    marginBottom: 12,
    color: '#33363F',
    fontFamily:fonts.HelveticaNeueBold
  },

});

export default styles
