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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationText: {
    color: '#000',
    fontSize: 14,
    lineHeight: 20,
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
    borderColor: '#007AFF', // viền xanh khi active
  },
});

 export default styles