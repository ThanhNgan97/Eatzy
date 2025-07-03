import React, { useState } from "react";
import styles from "./Login.style";
import DynamicIcon from "../../../shared/Icons/DynamicIcon";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

const Login = ({ onLogin, onNavigateRegister, onNavigateForgot }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.containerLogin}>
         <Image
        source={{
          uri: "https://a.pinatafarm.com/956x952/7fd2c04789/peace-sign-hamster.jpeg",
        }}
        style={styles.avatar}
      />

      <Text style={styles.title}>Login your</Text>
      <Text style={styles.subtitle}>Account</Text>

      <View style={styles.inputContainer}>
        <DynamicIcon 
            type="Feather" 
            name="mail" 
            size={18} 
            color="#C9C9C9" 
            style={styles.icon} 
          />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <DynamicIcon 
            type="Feather"  
            name="lock" 
            size={18} 
            color="#C9C9C9" 
            style={styles.icon} 
          />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <DynamicIcon 
            type="Feather" 
            name={showPassword ? "eye" : "eye-off"}
            size={15}
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

    <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onNavigateRegister}>
          <View style={styles.containerSignUp}>
            <Text style={styles.link}>
              Create new Account? <Text style={styles.signupText}>Sign up</Text>
            </Text>

          </View>
        </TouchableOpacity>

    </View>

      </View>
      <View style={styles.loginWithSection}>
        <Text style={styles.orText}>or login with</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity onPress={() => console.log("Google Login")}>
            <Image
              source={require("../../../assets/images/google.png")} 
              style={styles.socialIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("Facebook Login")}>
            <Image
              source={require("../../../assets/images/facebook.png")} 
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
