import {
  StyleSheet,
  ScrollView,
  View,
} from "react-native";
import fonts from "../../constants/fonts";
import CustomerProfile from "../../components/CustomerProfile/CustomerProfile";

const CustomerProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <CustomerProfile/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },

  scroll: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  buttonContainer: {
    paddingHorizontal: 16,
  },

  button: {
    marginTop: 16,
    backgroundColor: "#68BD6C",
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueBold,
  },
});

export default CustomerProfileScreen;
