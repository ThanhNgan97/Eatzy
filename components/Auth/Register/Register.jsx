import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";
import styles from "./Register.style";
import DynamicIcon from "../../../shared/Icons/DynamicIcon";

const Register = ({ onRegister, onNavigateLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.containerRegister}>
          <Image
        source={{
          uri: "https://a.pinatafarm.com/956x952/7fd2c04789/peace-sign-hamster.jpeg",
        }}
        style={styles.avatar}
      />
      <Text style={styles.title}>Create your{"\n"}Account</Text>

      <View style={styles.inputContainer}>
        <DynamicIcon 
          type="Feather"
          name="user"
          size={18}
          color="#C9C9C9"
          style={styles.icon}
        />
        <TextInput style={styles.input} placeholder="Full name" />
      </View>

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

      <TouchableOpacity style={styles.button} onPress={onRegister}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onNavigateLogin}>
        <Text style={styles.link}>
          Already have an account? <Text style={styles.loginText}>Login</Text>
        </Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default Register;
