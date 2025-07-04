import { StyleSheet, Platform } from "react-native";
import fonts from "../../../constants/fonts";

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },

  container: {
    flex: 1,
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
    paddingVertical: Platform.OS === "ios" ? 12 : 10,
    marginBottom: 16,
    fontFamily: fonts.HelveticaNeueMedium,
    fontSize: 15,
    backgroundColor: "#fff",
  },

  button: {
    backgroundColor: "#68BD6C",
    paddingHorizontal: 18,
    paddingVertical: Platform.OS === "ios" ? 8 : 6,
    borderRadius: 999,
    alignSelf: "flex-start",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  },

  buttonText: {
    color: "#fff",
    fontFamily: fonts.HelveticaNeueMedium,
    fontSize: 16,
  },
});

export default styles;
