import React from "react";
import { View, TextInput } from "react-native";
import DynamicIcon from "../Icons/DynamicIcon";
import styles from "./SearchBar.style";

const SearchBar = ({ placeholder }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#999"
        style={styles.input}
      />

      <DynamicIcon
        type="Ionicons"
        name="search"
        size={20}
        color="#7e7e7e"
        style={styles.searchIcon}
      />
    </View>
  );
};

export default SearchBar;
