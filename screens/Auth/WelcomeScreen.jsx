import React from "react";
import { View, StyleSheet } from "react-native";
import Welcome from "../../components/Auth/Welcome/Welcome";

const WelcomeScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleSignUp = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Welcome onLoginPress={handleLogin} onSignUpPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WelcomeScreen;
