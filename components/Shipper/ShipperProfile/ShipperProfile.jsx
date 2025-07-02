import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import styles from "./ShipperProfile.style";
import { useNavigation } from "@react-navigation/native";

const recentOrders = [
  {
    id: "1",
    name: "Bánh mì bơ trứng truyền thống",
    shop: "🥪 Bánh mì Bơ béo",
    image:
      "https://cdn.tgdd.vn/Files/2021/03/30/1338626/cach-lam-banh-mi-bo-trung-chien-gion-thom-ngon-cho-bua-sang-202203171652027692.jpg",
    status: "done",
  },
  {
    id: "2",
    name: "Miến gà off 5 ngày không bán",
    shop: "🥪 Tiệm không tên",
    image:
      "https://cdn.tgdd.vn/Files/2022/01/15/1412464/cach-nau-mien-ga-don-gian-ngon-nhu-ngoai-hang-202201151056397788.jpg",
    status: "canceled",
  },
];

const ShipperProfile = () => {
  const renderOrder = ({ item }) => (
    <View style={styles.orderItem}>
      <Image source={{ uri: item.image }} style={styles.orderImage} />
      <View style={styles.orderInfo}>
        <Text style={styles.orderTitle}>{item.name}</Text>
        <Text style={styles.orderShop}>{item.shop}</Text>
      </View>
      <Ionicons
        name={item.status === "done" ? "checkmark-circle" : "close-circle"}
        size={24}
        color={item.status === "done" ? "green" : "red"}
      />
    </View>
  );

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://media.sketchfab.com/models/c41b089c7d124489aa89f00951e72333/thumbnails/607a856ccb424b07aa197b3a368f0273/c3be82ddafe844618f565b032f5a302b.jpeg",
        }}
        style={styles.header}
      />

      {/* Avatar */}
      <View style={styles.avatarWrapper}>
        <Image
          source={{
            uri: "https://media.sketchfab.com/models/c41b089c7d124489aa89f00951e72333/thumbnails/607a856ccb424b07aa197b3a368f0273/c3be82ddafe844618f565b032f5a302b.jpeg",
          }}
          style={styles.avatar}
        />
      </View>

      {/* Profile info */}
      <Text style={styles.name}>Anh Thư</Text>
      <View style={styles.addressContainer}>
        <Ionicons name="location-outline" size={16} color="#4CAF50" />
        <Text style={styles.addressText}>
          Hẻm 12 Đ. 3 Tháng 2, Hưng Lợi, Ninh Kiều, Cần Thơ
        </Text>
      </View>

      <TouchableOpacity
        style={styles.modifyButton}
        onPress={() => navigation.navigate("ShipperProfileEditScreen")}
      >
        <Text style={styles.modifyText}>Modify profile</Text>
        <Feather
          name="edit"
          size={14}
          color="white"
          style={{ marginLeft: 6 }}
        />
      </TouchableOpacity>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>39</Text>
          <Text style={styles.statLabel}>orders</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>following</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>4.9/5</Text>
          <Text style={styles.statLabel}>ratings</Text>
        </View>
      </View>

      {/* Recent orders */}
      <Text style={styles.sectionTitle}>Recent orders</Text>
      <FlatList
        data={recentOrders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrder}
        style={styles.orderList}
      />

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShipperProfile;
