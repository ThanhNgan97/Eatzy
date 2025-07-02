import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./Welcome.style";

const Welcome = ({ onLoginPress, onSignUpPress }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://a.pinatafarm.com/956x952/7fd2c04789/peace-sign-hamster.jpeg",
        }}
        style={styles.avatar}
      />

      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.subtitle}>Eatzy</Text>

      <TouchableOpacity style={styles.loginButton} onPress={onLoginPress}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpButton} onPress={onSignUpPress}>
        <Text style={styles.signUpButtonText}>Sign up</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or login with</Text>

      <View style={styles.socialContainer}>
        <FontAwesome
          name="google"
          size={24}
          color="#DB4437"
          style={styles.icon}
        />
        <FontAwesome
          name="facebook"
          size={24}
          color="#1877F2"
          style={styles.icon}
        />
      </View>
    </View>
  );
};

export default Welcome;
