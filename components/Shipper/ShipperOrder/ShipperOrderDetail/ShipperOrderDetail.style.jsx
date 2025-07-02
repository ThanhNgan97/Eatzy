import { StyleSheet } from "react-native";
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
    elevation: 2,
  },

  orderTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  orderId: {
    color: "#4CAF50",
    fontWeight: "600",
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueBold,
  },

  cashCollect: {
    fontWeight: "600",
    fontSize: 16,
    color: "#000",
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
  },

  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
  },

  quantityBtn: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: "#E4F3E4",
    justifyContent: "center",
    alignItems: "center",
  },

  quantityText: {
    fontSize: 18,
    color: "#4CAF50",
  },

  quantityNumber: {
    marginHorizontal: 8,
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  section: {
    marginBottom: 16,
  },

  grayLabel: {
    color: "#777",
    marginBottom: 4,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  address: {
    fontSize: 14,
    color: "#000",
    marginBottom: 8,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  actionButton: {
    backgroundColor: "#fddccf",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: "flex-start",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },

  actionButtonText: {
    color: "#d24d0f",
    fontWeight: "600",
    fontFamily: fonts.HelveticaNeueBold,
  },

  greenButton: {
    backgroundColor: "#d7f5dc",
  },

  greenButtonText: {
    color: "#4CAF50",
    fontWeight: "600",
    fontFamily: fonts.HelveticaNeueBold,
  },

  noteBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 2,
    marginBottom: 20,
    fontFamily: fonts.HelveticaNeueMedium,
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
  },

  timeText: {
    fontSize: 13,
    color: "#999",
    marginTop: 12,
    textAlign: "center",
  },
});
