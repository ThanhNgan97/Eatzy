import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DynamicIcon from '../../../shared/Icons/DynamicIcon';
import styles from './OrderCard.style';

const OrderCard = ({ name, code, items, type, avatarUrl }) => {
  const navigation = useNavigation();
  const tagColor = type === 'New customer' ? '#68BD6C' : '#D9C676';

  const handlePress = () => {
    navigation.navigate('ShopOrderDetailScreen', {
      orderCode: code,
    });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.left}>
        <Image
          source={avatarUrl || require('../../../assets/image/avatar.png')}
          style={styles.avatar}
        />
        <View style={styles.info}>
          <View style={styles.nameRow}>
            <Text style={styles.nameText} numberOfLines={2}>
              {name}’s order 
            </Text>
            <View style={[styles.tag, { backgroundColor: tagColor }]}>
              <Text style={styles.tagText}>{type}</Text>
            </View>
          </View>
          <Text style={styles.orderCode}>{code}</Text>
          <Text style={styles.items}>
            {items} {items > 1 ? 'items' : 'item'}
          </Text>
        </View>
      </View>
      <View style={styles.right}>
        <DynamicIcon
          type="Ionicons"
          name="chevron-forward"
          size={20}
          color="#A0A0A0"
        />
      </View>
    </TouchableOpacity>
  );
};

export default OrderCard;
