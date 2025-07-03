import React, { useState } from "react";
import { View,Text } from "react-native";
import styles from "./ShopStatusRow.style";
import StatusModal from "./StatusModal";
import StatusBox from "./StatusBox";

const ShopStatusRow = () => {
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
    <>
      <View style={styles.statusRow}>
        <StatusBox
          status={shopStatus}
          onPress={() => setModalVisible(true)}
          color={getStatusColor(shopStatus)}
        />
        <View style={styles.statusBoxWhite}>
          <Text style={styles.statusTitle}>Today’s income</Text>
          <Text style={styles.statusNumberGray}>101</Text>
          <Text style={styles.statusLabelGray}>orders</Text>
        </View>
      </View>

      <StatusModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        options={statusOptions}
        selected={shopStatus}
        onSelect={handleSelectStatus}
        getColor={getStatusColor}
      />
    </>
  );
};

export default ShopStatusRow;
