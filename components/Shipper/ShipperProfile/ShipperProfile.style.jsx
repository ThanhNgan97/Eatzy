import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },

  header: {
    height: 160,
    backgroundColor: "transparent",
  },

  avatarWrapper: {
    alignItems: "center",
    marginTop: -60,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
  },

  name: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 8,
  },

  addressContainer: {
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: "#DFF5E3",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginTop: 6,
    alignItems: "center",
  },

  addressText: {
    color: "#4CAF50",
    marginLeft: 6,
    fontSize: 13,
  },

  modifyButton: {
    alignSelf: "center",
    backgroundColor: "#4CAF50",
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  modifyText: {
    color: "#fff",
    fontWeight: "bold",
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    padding: 20,
  },

  statBox: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 4,
    alignItems: "center",
  },

  statValue: {
    fontSize: 18,
    fontWeight: "bold",
  },

  statLabel: {
    fontSize: 13,
    color: "#666",
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
    paddingHorizontal: 20,
  },

  orderList: {
    marginBottom: 16,
    padding: 20,
  },

  orderItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },

  orderImage: {
    width: 50,
    height: 50,
    borderRadius: 12,
    marginRight: 12,
  },

  orderInfo: {
    flex: 1,
  },

  orderTitle: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 4,
  },

  orderShop: {
    fontSize: 13,
    color: "#666",
  },

  logoutButton: {
    alignSelf: "center",
    backgroundColor: "#4CAF50",
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 56,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
  },

  logoutText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: fonts.HelveticaNeueBold,
  },
});
