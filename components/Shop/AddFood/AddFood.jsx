import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import styles from "./AddFood.style";

const AddFood = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Text style={styles.label}>Food name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter food name"
            placeholderTextColor="#aaa"
          />

          <Text style={styles.label}>Price (VNĐ):</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter price"
            keyboardType="numeric"
            placeholderTextColor="#aaa"
          />

          <Text style={styles.label}>Image:</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Edit order</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddFood;
