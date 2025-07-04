import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./LogoutButton.style";

const LogoutButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.logoutButton} onPress={onPress}>
      <Text style={styles.logoutText}>Log out</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;