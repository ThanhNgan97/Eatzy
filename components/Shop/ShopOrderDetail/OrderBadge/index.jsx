import { View, Text, Image } from 'react-native';
import styles from './OrderBadge.style'

const OrderBadge = () => {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <Image
                source={require('../../../../assets/images/avatar.png')}
                style={styles.avatar}
            />
            <View style={styles.column}>
                <Text style={styles.nameText} numberOfLines={2}>
                    Tran Hai Dang 
                </Text>

                <Text style={styles.secondText} numberOfLines={2}>
                    6 minutes always
                </Text>

            </View>
            

        </View>

    </View>
  );
};

export default OrderBadge;
