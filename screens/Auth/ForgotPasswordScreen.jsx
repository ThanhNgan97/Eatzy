import React from "react";
import { View, StyleSheet } from "react-native";
import ForgotPassword from "../../components/Auth/ForgotPassword/ForgotPassword";

const ForgotPasswordScreen = ({ navigation }) => {
  const handleReset = () => {
    navigation.navigate("OTPVerification");
  };

  return (
    <View style={styles.container}>
      <ForgotPassword onReset={handleReset} />
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F5",
  },
});
