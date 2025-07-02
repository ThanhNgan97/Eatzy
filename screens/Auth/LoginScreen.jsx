import React from "react";
import { View, StyleSheet } from "react-native";
import Login from "../../components/Auth/Login/Login";

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    // TODO: xử lý đăng nhập
  };

  return (
    <View style={styles.screen}>
      <Login
        onLogin={handleLogin}
        onNavigateRegister={() => navigation.navigate("Register")}
        onNavigateForgot={() => navigation.navigate("ForgotPassword")}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", backgroundColor: "#fff" },
});
