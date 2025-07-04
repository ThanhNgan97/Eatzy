import React from "react";
import { View, StyleSheet } from "react-native";

import OrderHeader from "../../components/Shipper/ShipperOrderDetail/OrderHeader/OrderHeader";
import FoodInfoRow from "../../components/Shipper/ShipperOrderDetail/FoodInfoRow/FoodInfoRow";
import OrderAddressSection from "../../components/Shipper/ShipperOrderDetail/OrderAddressSection/OrderAddressSection";
import NoteBox from "../../components/Shipper/ShipperOrderDetail/NoteBox/NoteBox";
import Timestamp from "../../components/Shipper/ShipperOrderDetail/Timestamp/Timestamp";

const ShipperOrderDetailScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <OrderHeader orderId="FD-001" cashCollect="100,000đ" />
        <FoodInfoRow />

        <OrderAddressSection
          label="Điểm bắt đầu: Bún đậu Ba Phải"
          address="123 Trần Văn Hoài, P. Xuân Khánh, Q. Ninh Kiều, Tp. Cần Thơ"
          buttonText="Pick Up Now"
          isGreen={false}
        />

        <OrderAddressSection
          label="Điểm đến"
          address="19C1, Đường số 1, P.An Khánh, Q. Ninh Kiều, Tp. Cần Thơ"
          buttonText="Ship Now"
          isGreen={true}
        />

        <NoteBox note="Anh hạt dẻ yêu bé dâu tây" />
        <Timestamp time="Đã nhận đơn hàng lúc 09:04 - 09/04/2025" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f8f7",
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    elevation: 2,
  },
});

export default ShipperOrderDetailScreen;
