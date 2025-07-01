import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

const styles = StyleSheet.create({
  // Layout
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
    paddingHorizontal: 16,
  },

  // Address
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    flexWrap: "nowrap",
  },
  addressText: {
    flex: 1,
    fontSize: 13,
    color: "#5DB075",
    marginLeft: 4,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  // Header
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  rightIcons: {
    flexDirection: "row",
    gap: 8,
    marginLeft: 8,
  },
  circleIcon: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 50,
    borderColor: "#E0E0E0",
    borderWidth: 1,
  },
  helloText: {
    fontSize: 14,
    color: "#9E9E9E",
    fontFamily: fonts.HelveticaNeueMedium,
  },
  shopName: {
    fontSize: 18,
    color: "#000",
    fontFamily: fonts.HelveticaNeueBold,
  },

  // Status Row
  statusRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },
  statusBoxGreen: {
    flex: 1,
    backgroundColor: "#68BD6C",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  statusBoxWhite: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: "#68BD6C",
    justifyContent: "center",
    alignItems: "center",
  },
  statusTitle: {
    color: "#7E7E7E",
    fontSize: 14,
    fontFamily: fonts.HelveticaNeueMedium,
    marginBottom: 6,
  },

  statusNumber: {
    fontSize: 26,
    color: "#fff",
    fontFamily: fonts.HelveticaNeueBold,
    marginTop: 6,
  },

  statusNumberGray: {
    fontSize: 26,
    color: "#7E7E7E",
    fontFamily: fonts.HelveticaNeueBold,
    marginTop: 6,
  },

  statusLabel: {
    fontSize: 14,
    color: "#fff",
    fontFamily: fonts.HelveticaNeueMedium,
    marginTop: -2,
  },

  statusLabelGray: {
    fontSize: 14,
    color: "#7E7E7E",
    fontFamily: fonts.HelveticaNeueMedium,
    marginTop: -2,
  },

  dropdownTrigger: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
  },

  dropdownText: {
    color: "#000",
    fontSize: 14,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  statusDotWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#68BD6C",
  },

  dropdownItem: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },

  dropdownItemText: {
    fontSize: 14,
    color: "#333",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  menuRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  menuItem: {
    width: 90,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },

  menuText: {
    fontSize: 14,
    color: "#7E7E7E",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: 220,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default styles;
