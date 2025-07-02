import React from "react";
import ResetPassword from "../../components/Auth/ResetPassword/ResetPassword";

const ResetPasswordScreen = ({ navigation }) => {
  const handleConfirm = (newPassword) => {
    console.log("New password:", newPassword);
    // 👉 Gọi API đổi mật khẩu tại đây
    // Sau đó điều hướng, ví dụ quay lại Login
    navigation.navigate("Login");
  };

  return <ResetPassword onConfirm={handleConfirm} />;
};

export default ResetPasswordScreen;
