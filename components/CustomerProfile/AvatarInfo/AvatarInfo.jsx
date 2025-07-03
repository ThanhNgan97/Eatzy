import React from "react";
import { View, Text, Image } from "react-native";
import AddressBar from "../../../shared/AddressBar";
import styles from "./AvatarInfo.style";

const AvatarInfo = () => (
  <>
    <View style={styles.avatarWrapper}>
      <Image
        source={{
          uri: "https://media.sketchfab.com/models/c41b089c7d124489aa89f00951e72333/thumbnails/607a856ccb424b07aa197b3a368f0273/c3be82ddafe844618f565b032f5a302b.jpeg",
        }}
        style={styles.avatar}
      />
    </View>

    <View style={styles.profileInfo}>
      <Text style={styles.name}>Thanh Ngân</Text>
      <View style={{ marginTop: -20 }}>
        <AddressBar />
      </View>
    </View>
  </>
);

export default AvatarInfo;
