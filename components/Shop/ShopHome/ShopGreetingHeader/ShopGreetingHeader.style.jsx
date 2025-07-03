import { StyleSheet } from "react-native";
import fonts from "../../../../constants/fonts";


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
    flex: 1,
  },

  greetingHeaderHello: {
    fontSize: 13,
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
    alignItems: "center",
  },

  greetingHeaderSquare: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },

  searchWrapper: {
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 12,
    flex: 1,
    marginRight: 12,
},

  searchInput: {
    fontSize: 14,
    color: "#7e7e7e",
    paddingVertical: 6,
    paddingHorizontal: 8,
    fontFamily:fonts.HelveticaNeueMedium
  },

});

export default styles;
