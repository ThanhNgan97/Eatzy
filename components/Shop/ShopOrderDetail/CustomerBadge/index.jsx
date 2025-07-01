import { View, Text, Image } from 'react-native';
import styles from './CustomerBadge.style';

const CustomerBadge = () => {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <Image
                source={require('../../../assets/image/avatar.png')}
                style={styles.avatar}
            />
            <Text style={styles.nameText} numberOfLines={2}>
                Thanh Ngan’s 
            </Text>
        </View>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>New customer</Text>
      </View>
    </View>
  );
};

export default CustomerBadge;
