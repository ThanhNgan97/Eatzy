import { StyleSheet, Platform } from "react-native";
import fonts from "../../../../constants/fonts";

const styles = StyleSheet.create({
statusRow: {
  flexDirection: "row",
  paddingHorizontal: 16,
  marginTop: 16,
},

statusBoxGreen: {
  flex: 1,
  backgroundColor: "#68BD6C",
  borderRadius: 20,
  paddingVertical: 16,
  paddingHorizontal: 16,
  marginRight: 8, 
  justifyContent: "space-between", 
  ...Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
    },
    android: {
      elevation: 3,
    },
  }),
},

statusBoxWhite: {
  flex: 1,
  backgroundColor: "#fff",
  borderRadius: 20,
  paddingVertical: 16,
  paddingHorizontal: 16,
  marginLeft: 8, 
  borderWidth: 1,
  borderColor: "#68BD6C",
  justifyContent: "space-between", 
  ...Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 3,
    },
    android: {
      elevation: 2,
    },
  }),
},


  dropdownWrapper: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 12,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },

  dropdownTrigger: {
    marginBottom: 12,
  },

  statusInner: {
    flexDirection: "row",
    alignItems: "center",
  },

  statusDotWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },

  dropdownText: {
    fontSize: 12,
    color: "#333",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  dropdownIcon: {
    marginLeft: 6,
  },

  statusNumber: {
    fontSize: 30,
    color: "#fff",
    fontFamily: fonts.HelveticaNeueBold,
    marginTop: 20,
  },

  statusLabel: {
    fontSize: 12,
    color: "#fff",
    fontFamily: fonts.HelveticaNeueMedium,
    marginTop: -10,
  },

  statusTitle: {
    fontSize: 14,
    color: "#222222",
    fontFamily: fonts.HelveticaNeueBold,
    marginBottom: 8,
  },

  statusNumberGray: {
    fontSize: 30,
    color: "#7e7e7e",
    fontFamily: fonts.HelveticaNeueBold,
    marginTop: 20,
  },

  statusLabelGray: {
    fontSize: 12,
    color: "#7e7e7e",
    fontFamily: fonts.HelveticaNeueMedium,
    marginTop: -10,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 12,
    width: "70%",
    paddingVertical: 16,
    paddingHorizontal: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  dropdownItem: {
    paddingVertical: 12,
  },

  dropdownItemText: {
    fontSize: 14,
    color: "#222222",
    fontFamily: fonts.HelveticaNeueMedium,
  },
});

export default styles;
