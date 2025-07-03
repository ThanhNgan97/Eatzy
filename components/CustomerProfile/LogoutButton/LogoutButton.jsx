import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./LogoutButton.style";

const LogoutButton = () => (
  <TouchableOpacity style={styles.logoutButton}>
    <Text style={styles.logoutText}>Log out</Text>
  </TouchableOpacity>
);

export default LogoutButton;
