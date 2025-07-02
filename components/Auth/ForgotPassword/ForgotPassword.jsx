import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./ForgotPassword.style";

const ForgotPassword = ({ onReset }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://a.pinatafarm.com/956x952/7fd2c04789/peace-sign-hamster.jpeg",
        }}
        style={styles.avatar}
      />

      <Text style={styles.title}>Forgot</Text>
      <Text style={styles.title}>Your Password</Text>

      <View style={styles.inputWrapper}>
        <Feather name="mail" size={24} color="#56AE5A" style={styles.icon} />
        <View>
          <Text style={styles.inputLabel}>Email</Text>
          <Text style={styles.inputHint}>Code send to your email</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={onReset}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
