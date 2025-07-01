import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    backgroundColor: '#F8F8F8',
    flex: 1,
    marginTop:-10
  },

  title: {
    fontSize: 16,
    color: '#33363F',
    marginBottom: 4,
    fontFamily:fonts.HelveticaNeueBold
  },

  subtitle: {
    fontSize: 13,
    color: '#7e7e7e',
    marginBottom: 10,
    fontFamily:fonts.HelveticaNeueMedium
  },

  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
    borderRadius: 15,
  },

  iconWrapper: {
    backgroundColor: '#d3ecd4',
    borderRadius: 100,
    padding: 6,
    marginRight: 12,
    width:40,
    height:40,
    justifyContent:'center',
    alignItems:'center'
  },

  icon: {
    width: 24,
    height: 24,
  },

  label: {
    flex: 1,
    fontSize: 14,
    color: '#7e7e7e',
    fontFamily:fonts.HelveticaNeueMedium
  },

  checkIcon: {
    width: 20,
    height: 20,
    tintColor: '#68BD6C',
  },

  radioCircle: {
  width: 18,
  height: 18,
  borderRadius: 10,
  borderWidth: 1.5,
  borderColor: '#ccc',
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 8,
},

radioCircleSelected: {
  backgroundColor: '#68BD6C',
  borderColor: '#68BD6C',
},

radioInnerEmpty: {
  width: 10,
  height: 10,
  borderRadius: 5,
  backgroundColor: 'transparent',
},


});

export default styles