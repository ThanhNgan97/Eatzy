import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./GetOrderButton.style";

const GetOrderButton = () => {
  const navigation = useNavigation();

  const handleGetOrders = () => {
    navigation.navigate("Orders");
  };

  return (
    <TouchableOpacity style={styles.getOrderButton} onPress={handleGetOrders}>
      <Text style={styles.getOrderText}>Get orders!</Text>
    </TouchableOpacity>
  );
};

export default GetOrderButton;
