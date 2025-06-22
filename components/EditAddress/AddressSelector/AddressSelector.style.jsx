import { StyleSheet } from 'react-native';
import fonts from '../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginVertical: -16,
    marginHorizontal:10
  },

  label: {
    color: '#7e7e7e',
    fontSize: 12,
    marginBottom: 4,
    fontFamily:fonts.HelveticaNeueMedium
  },

  content: {
    paddingTop: 6,
    paddingHorizontal: 10,
    gap: 8
  },

  locationText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
    flexWrap: 'wrap',
    flexShrink: 1,
    width: '100%',
    lineHeight: 20,
    fontFamily:fonts.HelveticaNeueMedium
  },

  icon: {
    width: 16,
    height: 16,
    tintColor: '#ccc',
  },

  row: {
    flexDirection:"row",
    justifyContent:'space-between'
  },

   containerActive: {
    borderColor: '#007AFF', 
  },

mapWrapper: {
  height: 130,
  borderRadius: 10,
  overflow: 'hidden',
  width: '100%',
},

textBlock:{
  flex:1,
  marginTop:-70,
  marginRight:5
},

addressLine:{
  marginLeft:-5
}


});

 export default styles