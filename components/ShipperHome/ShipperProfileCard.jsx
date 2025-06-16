import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import WalletBox from "./WalletBox";

const ShipperProfileCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://mcdn.coolmate.me/image/March2023/tong-hop-25-anh-meme-hamster-cuc-hai-huoc-1410_841.jpg",
          }}
          style={styles.avatar}
        />

        <Text style={styles.name}>Lý Văn Anh</Text>

        <View style={styles.walletRow}>
          <WalletBox label="Ví tín dụng" amount="2.735.000đ" />
          <WalletBox label="Tài khoản riêng" amount="2.735.000đ" />
        </View>

        <View style={styles.bottomSection}>
          <Ionicons
            name="time-outline"
            size={24}
            color="#666"
            style={styles.icon}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get orders!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ShipperProfileCard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 0,
  },

  card: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
    paddingLeft: 29,
    paddingRight: 29,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: Dimensions.get("window").width,
    position: "relative",
  },

  avatar: {
    width: 91,
    height: 91,
    borderRadius: 91,
    position: "absolute",
    top: -45,
    zIndex: 10,
    borderWidth: 3,
    borderColor: "#fff",
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 16,
    fontFamily: "Helvetica Neue",
  },

  walletRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 24,
  },

  bottomSection: {
    marginTop: 40,
    width: "100%",
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#68BD6C",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
  },

  buttonText: {
    fontFamily: "Helvetica Neue",
    color: "white",
    fontWeight: "700",
    fontSize: 18,
  },

  icon: {
    position: "absolute",
    right: 20,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
});
