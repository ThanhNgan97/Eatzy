import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DynamicIcon from "../../../shared/Icons/DynamicIcon";
import styles from "./VoucherSection.style";

const VoucherSection = () => {
  return (
    <View style={styles.rectangleVoucherSection}>
      <View style={styles.voucherSectionRow}>
        <View style={styles.iconText}>
          <DynamicIcon
            type="MaterialCommunityIcons"
            name="ticket-outline"
            size={18}
            color="#33363F"
          />
          <Text style={styles.voucherText}>Voucher</Text>
        </View>
        <TouchableOpacity style={styles.voucherSectionApply}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VoucherSection;
