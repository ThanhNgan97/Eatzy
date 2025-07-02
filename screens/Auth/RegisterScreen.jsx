import React from "react";
import { View, StyleSheet } from "react-native";
import Register from "../../components/Auth/Register/Register";

const RegisterScreen = ({ navigation }) => {
  const handleRegister = () => {
    // TODO: xử lý đăng ký
  };

  return (
    <View style={styles.screen}>
      <Register
        onRegister={handleRegister}
        onNavigateLogin={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", backgroundColor: "#fff" },
});
