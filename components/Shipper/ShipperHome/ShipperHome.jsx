import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./ShipperHome.style";
import { useNavigation } from "@react-navigation/native";

const ShipperHome = () => {
  const navigation = useNavigation();

  const handleGetOrders = () => {
    navigation.navigate("Orders");
  };

  return (
    <View style={styles.container}>
      {/* Địa chỉ */}
      <View style={styles.addressContainer}>
        <Ionicons name="location-outline" size={16} color="#4CAF50" />
        <Text style={styles.addressText}>
          Hẻm 12 Đ. 3 Tháng 2, Hưng Lợi, Ninh Kiều, Cần Thơ
        </Text>
      </View>

      {/* Bản đồ (chiếm hết chiều cao còn lại) */}
      <View style={styles.mapWrapper}>
        <Text style={styles.mapText}>bản đồ ở đây</Text>
      </View>

      {/* Profile card dính sát bottom */}
      <View style={styles.profileCard}>
        <Image
          source={{
            uri: "https://media.sketchfab.com/models/c41b089c7d124489aa89f00951e72333/thumbnails/607a856ccb424b07aa197b3a368f0273/c3be82ddafe844618f565b032f5a302b.jpeg",
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Lý Văn Anh</Text>

        <View style={styles.balanceRow}>
          {/* <View style={styles.balanceBox}>
            <View style={styles.balanceIcon} />
            <Text style={styles.balanceLabel}>Ví tín dụng</Text>
            <Text style={styles.balanceAmount}>2.735.000đ</Text>
          </View>
          <View style={styles.balanceBox}>
            <View style={styles.balanceIcon} />
            <Text style={styles.balanceLabel}>Tài khoản riêng</Text>
            <Text style={styles.balanceAmount}>2.735.000đ</Text>
          </View> */}
          <View style={styles.balanceBox}>
            <Ionicons
              name="wallet-outline"
              size={20}
              color="#4CAF50"
              style={styles.balanceIcon}
            />
            <Text style={styles.balanceLabel}>Ví tín dụng</Text>
            <Text style={styles.balanceAmount}>2.735.000đ</Text>
          </View>

          <View style={styles.balanceBox}>
            <Ionicons
              name="card-outline"
              size={20}
              color="#4CAF50"
              style={styles.balanceIcon}
            />
            <Text style={styles.balanceLabel}>Tài khoản riêng</Text>
            <Text style={styles.balanceAmount}>2.735.000đ</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.getOrderButton}
          onPress={handleGetOrders}
        >
          <Text style={styles.getOrderText}>Get orders!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShipperHome;
