import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

const styles = StyleSheet.create({
  greetingHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  greetingHeaderColumn: {
    flexDirection: "column",
    flex:1
  },

  greetingHeaderHello: {
    fontSize: 12,
    fontFamily: fonts.HelveticaNeueMedium, 
    color: "#7e7e7e",
  },

  greetingHeaderUser: {
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueBold, 
    color: "#33363F",
  },

  greetingHeaderIconRow: {
    flexDirection: "row",
    gap: 12,
  },

  greetingHeaderSquare: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    borderRadius:100,
  },
});

export default styles
