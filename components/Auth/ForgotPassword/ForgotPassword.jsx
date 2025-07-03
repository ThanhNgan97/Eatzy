import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./ForgotPassword.style";
import DynamicIcon from "../../../shared/Icons/DynamicIcon";

const ForgotPassword = ({ onReset }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerForgotPassword}>
        <Image
        source={{
          uri: "https://a.pinatafarm.com/956x952/7fd2c04789/peace-sign-hamster.jpeg",
        }}
        style={styles.avatar}
      />

      <Text style={styles.title}>Forgot</Text>
      <Text style={styles.title}>Your Password</Text>

      <View style={styles.inputWrapper}>
        <DynamicIcon 
          type="Feather" 
          name="mail" 
          size={18} 
          color="#68BD6C" 
          style={styles.icon} 
        />
        <View style={styles.inputLabelColumn}>
          <Text style={styles.inputLabel}>Email</Text>
          <Text style={styles.inputHint}>Code send to your email</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={onReset}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default ForgotPassword;
