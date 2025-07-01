import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather, Ionicons, Entypo } from "@expo/vector-icons";
import styles from "./ShopHome.style";
import { SafeAreaView } from "react-native-safe-area-context";
import AddressBar from "../../../shared/AddressBar";
import { useNavigation } from "@react-navigation/native";

const ShopHome = () => {
  const navigation = useNavigation(); // ✅ lấy navigation từ hook

  const [modalVisible, setModalVisible] = useState(false);
  const [shopStatus, setShopStatus] = useState("Online");

  const statusOptions = ["Online", "Offline", "Busy"];

  const getStatusColor = (status) => {
    switch (status) {
      case "Online":
        return "#68BD6C";
      case "Offline":
        return "#FF3F33";
      case "Busy":
        return "#FFA500";
      default:
        return "#68BD6C";
    }
  };

  const handleSelectStatus = (status) => {
    setShopStatus(status);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Address */}
        <AddressBar />

        {/* Header */}
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.helloText}>Hello 👋</Text>
            <Text style={styles.shopName}>Núi Lửa Shop 💦</Text>
          </View>
          <View style={styles.rightIcons}>
            <TouchableOpacity style={styles.circleIcon}>
              <Feather name="search" size={18} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleIcon}>
              <Ionicons name="notifications-outline" size={18} color="#333" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Shop Status Row */}
        <View style={styles.statusRow}>
          <View style={styles.statusBoxGreen}>
            <TouchableOpacity
              style={styles.dropdownTrigger}
              onPress={() => setModalVisible(true)}
            >
              <View style={styles.statusDotWrapper}>
                <View
                  style={[
                    styles.statusDot,
                    { backgroundColor: getStatusColor(shopStatus) },
                  ]}
                />
                <Text style={styles.dropdownText}>
                  Shop is {shopStatus.toLowerCase()}
                </Text>
              </View>
            </TouchableOpacity>

            <Text style={styles.statusNumber}>13</Text>
            <Text style={styles.statusLabel}>orders</Text>
          </View>

          <View style={styles.statusBoxWhite}>
            <Text style={styles.statusTitle}>Today’s income</Text>
            <Text style={styles.statusNumberGray}>101</Text>
            <Text style={styles.statusLabelGray}>orders</Text>
          </View>
        </View>

        {/* Menu Grid */}
        <View style={styles.menuRow}>
          {[
            { icon: "shopping-cart", label: "Orders" },
            { icon: "book-open", label: "Menu", screen: "ShopMenu" },
            { icon: "star", label: "Ratings" },
            { icon: "trending-up", label: "Promotions" },
          ].map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.menuItem}
              onPress={() => {
                if (item.screen) {
                  navigation.navigate(item.screen);
                }
              }}
            >
              <Feather name={item.icon} size={22} color="#68BD6C" />
              <Text style={styles.menuText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Status Modal */}
        <Modal
          visible={modalVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.modalOverlay}>
              <TouchableWithoutFeedback>
                <View style={styles.modalContent}>
                  {statusOptions.map((option) => (
                    <TouchableOpacity
                      key={option}
                      style={styles.dropdownItem}
                      onPress={() => handleSelectStatus(option)}
                    >
                      <View style={styles.statusDotWrapper}>
                        <View
                          style={[
                            styles.statusDot,
                            { backgroundColor: getStatusColor(option) },
                          ]}
                        />
                        <Text
                          style={[
                            styles.dropdownItemText,
                            option === shopStatus && {
                              fontWeight: "bold",
                              color: getStatusColor(option),
                            },
                          ]}
                        >
                          Shop is {option.toLowerCase()}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default ShopHome;
