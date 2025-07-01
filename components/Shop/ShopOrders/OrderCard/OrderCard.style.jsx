import { Dimensions, StyleSheet } from 'react-native';
import fonts from '../../../../constants/fonts';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    width: width * 0.9, 
    height: 120,         
    marginBottom: 12,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    marginLeft:20
  },

  avatar: {
    width: 30,
    height: 30,
    borderRadius: 18,
    marginRight: 12,
  },
  info: {
    flex: 1,
    justifyContent:'space-between',
   
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 4,
    
  },

nameText: {
  fontSize: 14,
  color: '#7e7e7e',
  marginRight: 6,
  fontFamily: fonts.HelveticaNeueMedium,
  flexShrink: 1,           
  flexGrow: 1,           
},


  tag: {
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },

  tagText: {
    color: '#fff',
    fontSize: 10,
    fontFamily:fonts.HelveticaNeueBold
  },

  orderCode: {
    fontSize: 20,
    fontFamily:fonts.HelveticaNeueBold,
    color: '#111',
    marginBottom: 2,
  },

  items: {
    fontSize: 13,
    color: '#666',
  },

  right: {
    paddingLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconBox: {
    borderWidth: 1,
    borderColor: '#F4F2DC',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
  },
});

export default styles;
