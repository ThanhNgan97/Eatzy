import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    position: 'relative',
  },

  editButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 1,
  },

  editText: {
    color: '#68BD6C',
    fontSize:12,
    fontFamily:fonts.HelveticaNeueMedium
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 12,
  },

  info: {
    flex: 1,
  },

  name: {
    fontFamily:fonts.HelveticaNeueMedium,
    fontSize: 14,
  },

  subtitle: {
    color: '#7e7e7e',
    fontSize: 12,
    fontFamily:fonts.HelveticaNeueMedium
  },

  price: {
    marginTop: 4,
    fontSize: 14,
    fontFamily:fonts.HelveticaNeueMedium,
    color:'#484C4D'
  },

  quantity: {
    fontSize: 16,
    fontFamily:fonts.HelveticaNeueBold,
    marginTop:40
  },
});

export default styles