import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import styles from "./ResetPassword.style";
import DynamicIcon from "../../../shared/Icons/DynamicIcon";

const ResetPassword = ({ onConfirm }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = () => {
    if (newPassword === confirmPassword) {
      onConfirm(newPassword);
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerResetPassword}>
           <Image
        source={{
          uri: "https://a.pinatafarm.com/956x952/7fd2c04789/peace-sign-hamster.jpeg",
        }}
        style={styles.avatar}
      />
      <Text style={styles.title}>Reset</Text>
      <Text style={styles.subtitle}>Your Password</Text>

      <View style={styles.inputContainer}>
        <DynamicIcon 
          type="Feather" 
          name="lock" 
          size={18} 
          color="#aaa" 
          style={styles.icon} 
        />
        <TextInput
          placeholder="New Password"
          secureTextEntry={!showNew}
          style={styles.input}
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <TouchableOpacity onPress={() => setShowNew(!showNew)}>
          <DynamicIcon 
          type="Feather"  
          name={showNew ? "eye" : "eye-off"} 
          size={15} 
          color="#888" 
        />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <DynamicIcon 
          type="Feather"  
          name="lock" 
          size={18} 
          color="#aaa" 
          style={styles.icon} 
        />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={!showConfirm}
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
          <DynamicIcon 
            type="Feather" 
            name={showConfirm ? "eye" : "eye-off"}
            size={15}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPassword;
