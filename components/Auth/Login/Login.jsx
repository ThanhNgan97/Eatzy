import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./Login.style";

const Login = ({ onLogin, onNavigateRegister, onNavigateForgot }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://a.pinatafarm.com/956x952/7fd2c04789/peace-sign-hamster.jpeg",
        }}
        style={styles.avatar}
      />

      <Text style={styles.title}>Login your{"\n"}Account</Text>

      <View style={styles.inputContainer}>
        <Feather name="mail" size={20} color="#C9C9C9" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Feather name="lock" size={20} color="#C9C9C9" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Feather
            name={showPassword ? "eye" : "eye-off"}
            size={20}
            color="#C9C9C9"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={onNavigateForgot}
        style={styles.forgotPassword}
      >
        <Text style={styles.link}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onNavigateRegister}>
        <Text style={styles.link}>
          Create new Account? <Text style={styles.signupText}>Sign up</Text>
        </Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or login with</Text>

      <View style={styles.socialIcons}>
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

export default Login;
