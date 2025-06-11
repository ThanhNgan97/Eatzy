import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

const styles = StyleSheet.create({
  rectangleVoucherSection: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 10,
    marginTop: 12,  
  },

  voucherSectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  iconText: {
    flexDirection: "row",
    alignItems: "center",
  },

  voucherText: {
    marginLeft: 8,
    fontSize: 14,
    fontFamily: fonts.HelveticaNeueMedium,
    color:"#33363F"  
},

  voucherSectionApply: {
    backgroundColor: '#68BD6C',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
},

applyText: {
    fontSize: 14,
    color: "#fff",
    fontFamily: fonts.HelveticaNeueMedium,
    textAlign:'center',
  },
});

export default styles
