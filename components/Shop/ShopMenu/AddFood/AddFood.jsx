import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./AddFood.style";

const AddFood = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Food name:</Text>
      <TextInput style={styles.input} placeholder="Enter food name" />

      <Text style={styles.label}>Price (VNĐ):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Image:</Text>
      {/* Có thể thêm button chọn ảnh ở đây nếu cần */}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddFood;
