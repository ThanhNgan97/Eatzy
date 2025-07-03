import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./OTPVerification.style";

const OTPVerification = ({
  email = "thub2203xxx@student.ctu.edu.vn",
  onVerify,
  onResend,
}) => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerOTP}>
        <View style={styles.card}>
          <Text style={styles.title}>Check your email</Text>
          <Text style={styles.subtitle}>
            We sent a verification code to{"\n"}
            <Text style={styles.email}>{email}</Text>
          </Text>

          {/* OTP Inputs */}
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                maxLength={1}
                keyboardType="numeric"
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
              />
            ))}
          </View>

          <TouchableOpacity
            style={styles.verifyButton}
            onPress={() => onVerify(otp.join(""))}
          >
            <Text style={styles.verifyText}>Verify</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resendButton} onPress={onResend}>
            <Text style={styles.resendText}>Send again</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

export default OTPVerification;
