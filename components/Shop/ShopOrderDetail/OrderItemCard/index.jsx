import { View, Text, TouchableOpacity } from 'react-native';
import styles from './OrderItemCard.style';
import DynamicIcon from '../../../../shared/Icons/DynamicIcon';

const OrderItemCard = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <View style={styles.itemRow}>
          <Text style={styles.quantity}>1x</Text>
          <View style={styles.itemContent}>
            <Text style={styles.itemName}>Cá viên chấm nước mắm</Text>
            <Text style={styles.itemNote}>‘Để đá riêng giúp e ạ’</Text>
          </View>
          <Text style={styles.itemPrice}>45.000</Text>
        </View>

        <View style={styles.itemRow}>
          <Text style={styles.quantity}>2x</Text>
          <View style={styles.itemContent}>
            <Text style={styles.itemName}>Tài lọc 330ml</Text>
            <Text style={styles.itemNote}>‘e chạy Satria ạ’</Text>
          </View>
          <Text style={styles.itemPrice}>45.000</Text>
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Tổng cộng</Text>
          <Text style={styles.totalAmount}>90.000</Text>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.cancelBtn}>
          <View style={styles.iconTextRow}>
            <DynamicIcon
              type="Ionicons"
              name="close"
              size={18}
              color="#A80000"
              style={{ marginRight: 6 }}
            />
            <Text style={styles.cancelText}>Cancel order</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editText}>Edit order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItemCard;
