import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./FoodInfoRow.style";

const FoodInfoRow = () => (
  <View style={styles.foodRow}>
    <Image
      source={{
        uri: "https://cdn-icons-png.flaticon.com/512/1404/1404945.png",
      }}
      style={styles.foodImage}
    />
    <View style={styles.foodInfo}>
      <Text style={styles.foodName}>Melting Cheese Pizza</Text>
      <Text style={styles.foodType}>Pizza Italiano</Text>
      <Text style={styles.foodPrice}>$10.99</Text>
    </View>
    <View style={styles.quantityControl}>
      <TouchableOpacity style={styles.quantityBtn}>
        <Text style={styles.quantityText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantityNumber}>1</Text>
      <TouchableOpacity style={styles.quantityBtn}>
        <Text style={styles.quantityText}>+</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default FoodInfoRow;
