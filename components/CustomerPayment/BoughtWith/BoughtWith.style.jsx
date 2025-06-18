import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
card: {
  flexDirection: 'row',
  backgroundColor: '#fff',
  borderRadius: 12,
  padding: 12,
  marginRight: 12,
  width: screenWidth * 0.60, 
  alignItems: 'center',
  justifyContent: 'space-between',
},


  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginLeft: 12,
  },

  textContainer: {
    flex: 1,
    justifyContent: "center",
  },

  name: {
    fontSize: 14,
    marginBottom: 2,
    fontFamily: fonts.HelveticaNeueMedium,
    color: "#484C4D",
  },
  
  subtitle: {
    color: "#7e7e7e",
    fontSize: 12,
  },

  price: {
    marginTop: 4,
    fontFamily:fonts.HelveticaNeueBold,
    fontSize:14,
    color: "#484C4D",
  },
});
export default styles;
