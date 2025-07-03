import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DynamicIcon from "../../shared/Icons/DynamicIcon";
import recentOrders from "./CustomerProfileData";
import styles from "./CustomerProfile.style";
import AddressBar from "../../shared/AddressBar/index"


const CustomerProfile = () => {
  const renderOrder = ({ item }) => (
    <View style={styles.orderItem}>
      <Image source={{ uri: item.image }} style={styles.orderImage} />
      <View style={styles.orderInfo}>
        <Text style={styles.orderTitle}>{item.name}</Text>
        <Text style={styles.orderShop}>{item.shop}</Text>
      </View>
      <DynamicIcon type= "Ionicons"
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
        resizeMode="cover"
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
        <View style={styles.profileInfo}>
            <Text style={styles.name}>Thanh Ngân</Text>
            <View style={{ marginTop: -20}}>
                <AddressBar />
            </View>
        </View>


      <TouchableOpacity
        style={styles.modifyButton}
        onPress={() => navigation.navigate("ShipperProfileEditScreen")}
      >
        <Text style={styles.modifyText}>Modify</Text>
        <DynamicIcon type="Feather"
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
        scrollEnabled={false}
        style={styles.orderList}
      />

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomerProfile;
