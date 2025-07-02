import React from "react";
import OTPVerification from "../../components/Auth/OTPVerification/OTPVerification";

const OTPVerificationScreen = ({ navigation }) => {
  const handleVerify = (otpCode) => {
    console.log("OTP entered:", otpCode);
    // TODO: Thêm logic xác minh OTP thực tế tại đây

    // 👉 Điều hướng tới màn hình tiếp theo sau khi xác minh thành công
    navigation.navigate("ResetPassword");
  };

  const handleResend = () => {
    console.log("Resend OTP");
    // TODO: Gọi API để gửi lại mã OTP
  };

  return (
    <OTPVerification
      onVerify={handleVerify}
      onResend={handleResend}
      email="thub2203xxx@student.ctu.edu.vn" // 👈 Truyền email động nếu có thể
    />
  );
};

export default OTPVerificationScreen;
