import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: '#F4F8F7',
  },
  
  title: {
    fontSize: 16,
    marginBottom: 12,
    color: '#484C4D',
    fontFamily:fonts.HelveticaNeueBold
  },

  list: {
    gap: 12,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  cardSelected: {
    borderColor: '#68BD6C',
    borderWidth: 1,
  },

  cardUnselected: {
    borderColor: 'transparent',
    borderWidth: 1,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7e7e7e',
  },

  subInfo: {
    fontSize: 12,
    color: '#7E7E7E',
    marginTop: 4,
  },

  customCheckbox: {
  width: 18,
  height: 18,
  borderWidth: 1.5,
  borderColor: '#ccc',
  borderRadius: 6, 
  justifyContent: 'center',
  alignItems: 'center',
},

checkboxSelected: {
  borderColor: '#68BD6C',
  backgroundColor: '#68BD6C',
},

checkboxUnselected: {
  backgroundColor: '#fff',
},


});

export default styles