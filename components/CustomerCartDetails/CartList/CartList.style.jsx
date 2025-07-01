import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },

 container: {
   padding: 16,
   position: 'relative',
   top:-20
  },
  
  cartListImage: {
    alignItems: "center",
  },

  image: {
    width: 150,
    height: 130,
    borderRadius: 75, 
  },

  title: {
    marginTop: 12,
    fontSize: 16,
    color: "#484C4D",
    fontFamily:fonts.HelveticaNeueMedium
  },

  column: {
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'flex-start',
  },

 row: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: 'space-between',
  alignSelf:'flex-start',
  alignSelf:'flex-start', 
  gap: 50,
},

  ratingCountRow: {
    flexDirection:'row'
  },

 icon: {
  width: 16,
  height: 16,
},

subtitle: {
  fontSize: 13,
  color: "#7E7E7E",
  marginRight: 6,
  fontFamily: fonts.HelveticaNeueMedium,
},

star: {
  marginRight: 6, 
},

ratingCountRow: {
  flexDirection: 'row',
  alignItems: 'center',
},

rating: {
  color: "#484C4D",
  marginRight: 4,
  fontFamily: fonts.HelveticaNeueBold,
},

reviewCount: {
  color: "#7e7e7e",
  fontFamily: fonts.HelveticaNeueBold,
  fontSize:16
},

iconSubtitle: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: 'space-between',
  alignSelf:'flex-start',
  alignSelf:'flex-start', 
  gap: 5,
},

ratingStarCountRow:{
  flexDirection: "row",
  alignItems: "center",
  justifyContent: 'space-between',
  alignSelf:'flex-start',
  alignSelf:'flex-start', 
  gap: 5,
}

});

export default styles;
