import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './NoteInput.style';

const NoteInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>Add a note</Text>
        <View style={styles.optionalTag}>
          <Text style={styles.optionalText}>Optional</Text>
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Add a note for the shop ..."
        placeholderTextColor="#666"
        multiline
      />
    </View>
  );
};

export default NoteInput;
