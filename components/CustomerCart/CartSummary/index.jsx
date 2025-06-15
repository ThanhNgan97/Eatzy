import { View, Text } from "react-native";
import styles from "./CartSummary.style";

const CartSummary = () => {
  const subtotal = 21430; 
  const delivery = 5000;  
  const total = subtotal + delivery;

  const formatVND = (value) => `${value.toLocaleString('vi-VN')} đ`;

  return (
    <View style={styles.rectangleCartSummary}>
      <View style={styles.cartSummaryColumn}>
        <View style={styles.cartSummaryRow}>
          <Text style={styles.labelText}>Subtotal</Text>
          <Text style={styles.valueText}>{formatVND(subtotal)}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.cartSummaryRow}>
          <Text style={styles.labelText}>Delivery</Text>
          <Text style={styles.valueText}>{formatVND(delivery)}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.cartSummaryRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>{formatVND(total)}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartSummary;
