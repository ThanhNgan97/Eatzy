import { View, Text } from "react-native";
import styles from "./CartSummary.style";

const CartSummary = () => {
  return (
    <View style={styles.rectangleCartSummary}>
      <View style={styles.cartSummaryColumn}>
        {/* Subtotal */}
        <View style={styles.cartSummaryRow}>
          <Text style={styles.labelText}>Subtotal</Text>
          <Text style={styles.valueText}>$21.43</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Delivery */}
        <View style={styles.cartSummaryRow}>
          <Text style={styles.labelText}>Delivery</Text>
          <Text style={styles.valueText}>$5</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Total */}
        <View style={styles.cartSummaryRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>$26.43</Text>
        </View>
      </View>
    </View>
  );
};

export default CartSummary;
