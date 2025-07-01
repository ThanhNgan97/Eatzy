import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    marginTop:-25
  },

  card:{
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },

  label: {
    color: '#7e7e7e',
    fontSize: 12,
    fontFamily:fonts.HelveticaNeueMedium
  },

  addressWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },

  value: {
    fontSize: 14,
    color: '#222222',
    marginVertical: 2,
    fontFamily:fonts.HelveticaNeueMedium
  },

  modal: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#68BD6C',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },

  row:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
});

export default styles