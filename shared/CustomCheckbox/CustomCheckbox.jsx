import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import DynamicIcon from "../Icons/DynamicIcon";

const CustomCheckbox = ({ isChecked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.checkbox, isChecked && styles.checked]}>
        {isChecked && (
          <DynamicIcon type="MaterialIcons" name="check" size={16} color="#fff" />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4, 
    borderWidth: 1.5,
    borderColor: "#68BD6C",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  checked: {
    backgroundColor: "#68BD6C",
  },
});

export default CustomCheckbox;
