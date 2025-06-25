import { StyleSheet } from "react-native";
import fonts from "../../constants/fonts";

export default StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 12,
    marginBottom: 12,
  },

  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    marginTop: 2,
  },

  content: {
    flex: 1,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 15,
    color: "#222222",
    flex: 1,
    flexWrap: "wrap",
    fontFamily:fonts.HelveticaNeueBold
  },

  time: {
    fontSize: 12,
    color: "#999",
    marginLeft: 6,
    fontFamily:fonts.HelveticaNeueBold

  },

  description: {
    color: "#7e7e7e",
    fontSize: 12,
    marginTop: 4,
    fontFamily:fonts.HelveticaNeueMedium
  },

  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red",
    marginLeft: 6,
  },

  thumbnail: {
    width: 0,
    height: 50,
    borderRadius: 6,
    marginLeft: 8,
  },

});
