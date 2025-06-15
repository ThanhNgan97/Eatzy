import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DynamicIcon from "../../../shared/Icons/DynamicIcon";
import styles from "./VoucherSection.style";

const VoucherSection = () => {
  const navigation = useNavigation(); 

const handleApplyPress = () => {
  navigation.navigate('Home', {
    screen: 'CustomerVoucherScreen',
  });
};


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
        <TouchableOpacity
          style={styles.voucherSectionApply}
          onPress={handleApplyPress} 
        >
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VoucherSection;
