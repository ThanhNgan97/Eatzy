import React from "react";
import { ImageBackground, Dimensions } from "react-native";
import styles from "./HeaderBanner.style";

const { width } = Dimensions.get("window");

const HeaderBanner = () => (
  <ImageBackground
    source={{
      uri: "https://media.sketchfab.com/models/c41b089c7d124489aa89f00951e72333/thumbnails/607a856ccb424b07aa197b3a368f0273/c3be82ddafe844618f565b032f5a302b.jpeg",
    }}
    resizeMode="cover"
    style={[styles.header, { width }]}
  />
);

export default HeaderBanner;
