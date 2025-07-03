import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

const styles = StyleSheet.create({
  container:{
    padding:10
  },  

  infoCard: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
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
    fontSize: 15,
    color: "#222222",
    fontFamily: fonts.HelveticaNeueMedium,
  },
});

export default styles;
