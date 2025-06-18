import fonts from "../../constants/fonts";
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 10,
    backgroundColor:'#fff',
    paddingHorizontal:12,
    paddingTop:20

  },

  ticketImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginRight: 12,
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: 14,
    color: "#484C4D",
    fontFamily: fonts.HelveticaNeueBold,
  },

  subtitle: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  progressBarContainer: {
    height: 6,
    backgroundColor: "#E0E0E0",
    borderRadius: 3,
    overflow: "hidden",
    marginVertical: 6,
  },

  progressBarFill: {
    height: "100%",
    backgroundColor: "#82CD47",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  usedText: {
    fontSize: 12,
    color: "#777",
  },

  tcText: {
    fontSize: 12,
    color: "#68BD6C",
  },

checkboxItem: {
  width: 18,
  height: 18,
  borderRadius: 100,
  borderWidth: 2,
  borderColor: "#ccc",         
  backgroundColor: "#fff",      
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: 10,
  right: 10,
},

checked: {
  backgroundColor: "#68BD6C",  
  borderColor: "#68BD6C",       
},


  checkboxModal: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: "#E3E3E3",
    marginLeft: 8,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  containerIndex: {
    padding: 10,
    marginTop: -20,
  },

  voucherText: {
    fontSize: 16,
    marginBottom: 12,
    fontFamily: fonts.HelveticaNeueBold,
    color: "#484C4D",
  },

  squareIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  iconContainer: {
    padding: 8,
  },

  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 12,
    padding: 20,
  },

  modalTitle: {
    fontFamily: fonts.HelveticaNeueBold,
    fontSize: 16,
    color: "#484C4D",
    textAlign: "center",
    marginBottom: 16,
  },

  row: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "flex-start",
  },

  subTitle: {
    fontFamily: fonts.HelveticaNeueBold,
    fontSize: 14,
    color: "#484C4D",
    marginBottom: 4,
  },

  description: {
    fontFamily: fonts.HelveticaNeueMedium,
    fontSize: 13,
    color: "#7e7e7e",
  },

  button: {
    backgroundColor: "#68BD6C",  
    marginTop: 16,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
  },

  buttonText: {
    fontFamily: fonts.HelveticaNeueMedium,
    fontSize: 14,
    color: "#fff",
  },


 confirmButtonContainer: {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: 16,
  backgroundColor: "#fff",
  borderTopWidth: 1,
  borderColor: "#ddd",
},

confirmButton: {
  backgroundColor: "#68BD6C",
  paddingVertical: 12,
  borderRadius: 8,
  alignItems: "center",
},

confirmButtonText: {
  color: "#fff",
  fontSize: 16,
  fontFamily:fonts.HelveticaNeueBold
},


modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },

  modalContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 30,
  },

  header: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
    fontFamily:fonts.HelveticaNeueBold,
    color:'#33363F'
  },

  content: {
    marginBottom: 30,
  },

  sectionTitle: {
    fontFamily:fonts.HelveticaNeueBold,
    fontSize: 14,
    marginBottom: 6,
    color:'#484C4D'
  },

  sectionText: {
    fontSize: 14,
    color: "#7e7e7e",
    marginBottom: 20,
    lineHeight: 20,
    fontFamily:fonts.HelveticaNeueMedium
  },

  underStandButton: {
    backgroundColor: "#68BD6C", 
    borderRadius: 30,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  underStandButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },


    modalOverlayTAndCs: {
    flex: 1,
    backgroundColor: "#00000066",
    justifyContent: "flex-end",
  },

  modalContainerTAndCs: {
    maxHeight: "85%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: "hidden",
  },

  modalContentTAndCs: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  backButtonTAndCs: {
    paddingVertical: 16,
  },

  headerTAndCs: {
    fontSize: 18,
    fontFamily: fonts.HelveticaNeueBold,
    textAlign: "center",
    color: "#33363F",
    marginBottom: 16,
  },

  voucherCardTAndCs: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    borderRadius: 12,
    padding: 12,
    marginBottom: 24,
  },

  voucherImageTAndCs: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  voucherTitleTAndCs: {
    fontSize: 14,
    fontFamily: fonts.HelveticaNeueBold,
    color: "#33363F",
    marginBottom: 2,
  },

  voucherSubtitleTAndCs: {
    fontSize: 12,
    fontFamily: fonts.HelveticaNeueMedium,
    color: "#7e7e7e",
    marginBottom: 6,
  },

  progressBarTAndCs: {
    height: 4,
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: 2,
    marginBottom: 4,
  },

  progressFillTAndCs: {
    width: "90%",
    height: 4,
    backgroundColor: "#68BD6C",
    borderRadius: 2,
  },

  tcTextTAndCs: {
    fontSize: 12,
    fontFamily: fonts.HelveticaNeueMedium,
    color: "#68BD6C",
  },

  checkIconTAndCs: {
    width: 20,
    height: 20,
    backgroundColor: "#68BD6C",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  sectionTAndCs: {
    marginBottom: 20,
  },

  sectionTitleTAndCs: {
    fontSize: 14,
    fontFamily: fonts.HelveticaNeueBold,
    color: "#33363F",
    marginBottom: 4,
  },

  sectionTextTAndCs: {
    fontSize: 13,
    fontFamily: fonts.HelveticaNeueMedium,
    color: "#7e7e7e",
    lineHeight: 20,
  },

  okButtonTAndCs: {
    backgroundColor: "#68BD6C",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },

  okButtonTextTAndCs: {
    fontSize: 15,
    fontFamily: fonts.HelveticaNeueBold,
    color: "#fff",
  },
});




export default styles;