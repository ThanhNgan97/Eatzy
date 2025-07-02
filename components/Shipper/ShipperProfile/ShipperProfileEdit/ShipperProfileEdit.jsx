import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./ShipperProfileEdit.style";

const ShipperProfileEdit = () => {
  const handleLogout = () => {
    console.log("Logout pressed");
    // Add logic here to log out
  };

  return (
    <View style={styles.container}>
      {/* Avatar with Camera icon */}
      <View style={styles.avatarWrapper}>
        <Image
          source={{
            uri: "https://media.sketchfab.com/models/c41b089c7d124489aa89f00951e72333/thumbnails/607a856ccb424b07aa197b3a368f0273/c3be82ddafe844618f565b032f5a302b.jpeg",
          }}
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.cameraIconWrapper}>
          <Ionicons name="camera" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Info card */}
      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Full name</Text>
          <Text style={styles.value}>Anh Thư Nguyễn</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>thub22035xx@student.ctu.edu.vn</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.value}>0983456789</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.value}>
            123 Trần Hưng Đạo, P. Xuân Khánh{"\n"}Q. Ninh Kiều. Tp. Cần Thơ
          </Text>
        </View>
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShipperProfileEdit;
