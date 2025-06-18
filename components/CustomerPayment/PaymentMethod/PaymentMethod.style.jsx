import { StyleSheet } from 'react-native';
import fonts from '../../../constants/fonts';

const styles = StyleSheet.create({
   container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop:-10
  },

  paymentMethodTitle: {
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueBold,
    color: '#484C4D',
    marginBottom: 10,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  rectangleIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#d3ecd4',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },


  paymentMethodText: {
    flex: 1,
    fontSize: 14,
    fontFamily: fonts.HelveticaNeueMedium,
    color: '#7e7e7e',
  },

  rectangle: {
    backgroundColor: '#d3ecd4',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 4,
  },

  paymentMethodRecommended: {
    fontSize: 10,
    color: '#68BD6C',
    fontFamily: fonts.HelveticaNeueMedium,
  },

  seeAllContainer: {
    alignItems: 'flex-end',
    // marginBottom: 5,
  },
  seeAllText: {
    fontSize: 14,
    color: '#68BD6C',
  },

});

export default styles;

