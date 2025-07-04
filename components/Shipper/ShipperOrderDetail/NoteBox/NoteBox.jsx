import React from "react";
import { View, Text } from "react-native";
import styles from "./NoteBox.style";

const NoteBox = ({ note }) => (
  <View style={styles.noteBox}>
    <Text style={styles.noteLabel}>Ghi chú:</Text>
    <Text style={styles.noteText}>{note}</Text>
  </View>
);

export default NoteBox;
