import { StyleSheet } from 'react-native';
import fonts from '../../../constants/fonts';

export default StyleSheet.create({
container: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#fff',
  paddingVertical: 12,
  paddingHorizontal: 16,
  borderRadius: 20,
  borderWidth: 1,
  borderColor: '#E0E0E0',
  alignSelf: 'stretch',
  marginHorizontal: 10,
},

avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
},

nameText: {
  fontSize: 14,
  color: '#1C1C1E',
  marginRight: 8,
  flexShrink: 1,         
  flexWrap: 'wrap',
  fontFamily:fonts.HelveticaNeueMedium      
},

  badge: {
    backgroundColor: '#68BD6C',
    borderRadius: 12,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },

  badgeText: {
    fontSize: 10,
    color: '#fff',
    fontFamily:fonts.HelveticaNeueBold
  },

row: {
  flexDirection: 'row',
  alignItems: 'center',
  flex: 1,
  marginRight: 'auto',
}


});
