import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

const styles = StyleSheet.create({
  categoryListContainer: {
    paddingVertical: 16,
  },

  categoryListRow: {
    flexDirection: "row",
    paddingHorizontal:10,
    gap: 12,
  },

  categoryListSquare: {
    width: 72,
    height: 85,
    borderRadius: 16,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  categoryListColumn: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  categoryListIcon: {
    fontSize: 20,
    marginBottom: 10,
  },

  categoryListText: {
  fontSize: 10,
  fontFamily: fonts.HelveticaNeueMedium,
  color: "#7e7e7e",
  textAlign: "center",
  flexWrap: 'wrap', 
  maxWidth: 70, 
},

});

export default styles