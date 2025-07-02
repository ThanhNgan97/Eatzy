import { StyleSheet } from "react-native";
import fonts from "../../../../constants/fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  avatarWrapper: {
    position: "relative",
    marginBottom: 30,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  cameraIconWrapper: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#4CAF50",
    borderRadius: 20,
    padding: 5,
  },

  infoCard: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 40,
  },

  infoRow: {
    marginBottom: 16,
  },

  label: {
    fontSize: 14,
    color: "#888",
    marginBottom: 4,
    fontFamily: fonts.HelveticaNeueBold,
  },

  value: {
    fontSize: 16,
    color: "#000",
    fontFamily: fonts.HelveticaNeueMedium,
  },

  logoutButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
  },

  logoutText: {
    color: "white",
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueBold,
  },
});
