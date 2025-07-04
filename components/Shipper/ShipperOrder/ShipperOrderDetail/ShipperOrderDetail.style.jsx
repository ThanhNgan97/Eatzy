import { StyleSheet, Platform } from "react-native";
import fonts from "../../../../constants/fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f8f7",
    padding: 16,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
      },
      android: {
        elevation: 2,
      },
    }),
  },

  orderTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  orderId: {
    color: "#4CAF50",
    fontWeight: "600",
    fontSize: Platform.OS === "ios" ? 16 : 15,
    fontFamily: fonts.HelveticaNeueBold,
  },

  cashCollect: {
    fontWeight: "600",
    fontSize: Platform.OS === "ios" ? 16 : 15,
    color: "#000",
    fontFamily: fonts.HelveticaNeueBold,
  },

  foodRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  foodImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },

  foodInfo: {
    flex: 1,
  },

  foodName: {
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueBold,
    color: "#333",
  },

  foodType: {
    fontSize: 14,
    color: "#888",
    marginBottom: 4,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  foodPrice: {
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueBold,
    color: "#000",
  },

  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
    marginTop:30,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },

  quantityBtn: {
    width: 25,
    height: 25,
    borderRadius: 6,
    backgroundColor: "#E4F3E4",
    justifyContent: "center",
    alignItems: "center",
  },

  quantityText: {
    fontSize: 18,
    color: "#4CAF50",
    fontFamily: fonts.HelveticaNeueBold,
  },

  quantityNumber: {
    marginHorizontal: 8,
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueMedium,
    color: "#333",
  },

  section: {
    marginBottom: 16,
  },

  grayLabel: {
    color: "#777",
    marginBottom: 4,
    fontFamily: fonts.HelveticaNeueMedium,
    fontSize: 13,
  },

  address: {
    fontSize: 14,
    color: "#000",
    marginBottom: 8,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  actionButton: {
    backgroundColor: "#fddccf",
    paddingVertical: Platform.OS === "ios" ? 7 : 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: "flex-start",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },

  actionButtonText: {
    color: "#d24d0f",
    fontWeight: "600",
    fontFamily: fonts.HelveticaNeueBold,
    fontSize: 14,
  },

  greenButton: {
    backgroundColor: "#d7f5dc",
  },

  greenButtonText: {
    color: "#4CAF50",
    fontWeight: "600",
    fontFamily: fonts.HelveticaNeueBold,
    fontSize: 14,
  },

  noteBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
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

  noteLabel: {
    fontSize: 13,
    color: "#777",
    marginBottom: 4,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  noteText: {
    fontSize: 14,
    color: "#000",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  timeText: {
    fontSize: 13,
    color: "#999",
    marginTop: 12,
    textAlign: "center",
    fontFamily: fonts.HelveticaNeueMedium,
  },
});
