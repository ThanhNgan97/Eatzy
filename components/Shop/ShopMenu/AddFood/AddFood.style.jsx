import { StyleSheet } from "react-native";
import fonts from "../../../../constants/fonts";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontFamily: fonts.HelveticaNeueMedium,
    color: "#3F3F3F",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    fontFamily: fonts.HelveticaNeueMedium,
  },
  button: {
    backgroundColor: "#68BD6C",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 999,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontFamily: fonts.HelveticaNeueMedium,
    fontSize: 16,
  },
});

export default styles;
