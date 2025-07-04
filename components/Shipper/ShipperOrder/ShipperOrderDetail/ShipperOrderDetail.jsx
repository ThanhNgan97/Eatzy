import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./ShipperOrderDetail.style";

const ShipperOrderDetail = () => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      <View style={styles.card}>
        <View style={styles.orderTop}>
          <Text style={styles.orderId}>FD-001</Text>
          <Text style={styles.cashCollect}>Thu hộ: 100,000đ</Text>
        </View>

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
            <TouchableOpacity
              style={styles.quantityBtn}
              onPress={decreaseQuantity}
            >
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityNumber}>{quantity}</Text>
            <TouchableOpacity
              style={styles.quantityBtn}
              onPress={increaseQuantity}
            >
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.grayLabel}>Điểm bắt đầu: Bún đậu Ba Phải</Text>
          <Text style={styles.address} numberOfLines={2}>
            123 Trần Văn Hoài, P. Xuân Khánh, Q. Ninh Kiều, Tp. Cần Thơ
          </Text>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Pick Up Now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.grayLabel}>Điểm đến</Text>
          <Text style={styles.address} numberOfLines={2}>
            19C1, Đường số 1, P.An Khánh, Q. Ninh Kiều, Tp. Cần Thơ
          </Text>
          <TouchableOpacity style={[styles.actionButton, styles.greenButton]}>
            <Text style={styles.greenButtonText}>Ship Now</Text>
          </TouchableOpacity>
        </View>
      </View>

       <View style={styles.noteBox}>
          <Text style={styles.noteLabel}>Ghi chú:</Text>
          <Text style={styles.noteText}>Anh hạt dẻ yêu bé dâu tây</Text>
        </View>

        <Text style={styles.timeText}>
          Đã nhận đơn hàng lúc 09:04 - 09/04/2025
        </Text>
    </ScrollView>
  );
};

export default ShipperOrderDetail;
