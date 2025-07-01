import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding:12,
    justifyContent: 'center',
    marginHorizontal:10,
    marginTop:-20
  },
  buttonText: {
    marginLeft: 8,
    color: '#68BD6C',
    fontSize: 16,
    fontFamily:fonts.HelveticaNeueMedium
  },
});

export default styles