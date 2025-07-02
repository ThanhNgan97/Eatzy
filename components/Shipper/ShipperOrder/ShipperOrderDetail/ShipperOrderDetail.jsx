import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./ShipperOrderDetail.style";

const ShipperOrderDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.orderTop}>
          <Text style={styles.orderId}>FD-001</Text>
          <Text style={styles.cashCollect}>Thu hộ: 100,000đ</Text>
        </View>

        {/* Image + Info */}
        <View style={styles.foodRow}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1404/1404945.png",
            }}
            style={styles.foodImage}
          />
          <View style={styles.foodInfo}>
            <Text style={styles.foodName}>Melting Cheese Pizza</Text>
            <Text style={styles.foodType}>Pizza Italiano</Text>
            <Text style={styles.foodPrice}>$10.99</Text>
          </View>
          <View style={styles.quantityControl}>
            <TouchableOpacity style={styles.quantityBtn}>
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityNumber}>1</Text>
            <TouchableOpacity style={styles.quantityBtn}>
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.grayLabel}>Điểm bắt đầu: Bún đậu Ba Phải</Text>
          <Text style={styles.address}>
            123 Trần Văn Hoài, P. Xuân Khánh, Q. Ninh Kiều, Tp. Cần Thơ
          </Text>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Pick Up Now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.grayLabel}>Điểm đến</Text>
          <Text style={styles.address}>
            19C1, Đường số 1, P.An Khánh, Q. Ninh Kiều, Tp. Cần Thơ
          </Text>
          <TouchableOpacity style={[styles.actionButton, styles.greenButton]}>
            <Text style={styles.greenButtonText}>Ship Now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.noteBox}>
          <Text style={styles.noteLabel}>Ghi chú:</Text>
          <Text style={styles.noteText}>Anh hạt dẻ yêu bé dâu tây</Text>
        </View>

        <Text style={styles.timeText}>
          Đã nhận đơn hàng lúc 09:04 - 09/04/2025
        </Text>
      </View>
    </View>
  );
};

export default ShipperOrderDetail;
