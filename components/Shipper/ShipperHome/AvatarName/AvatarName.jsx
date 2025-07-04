import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./AvatarName.style";

const AvatarName = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://media.sketchfab.com/models/c41b089c7d124489aa89f00951e72333/thumbnails/607a856ccb424b07aa197b3a368f0273/c3be82ddafe844618f565b032f5a302b.jpeg",
        }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Lý Văn Anh</Text>
    </View>
  );
};

export default AvatarName;
