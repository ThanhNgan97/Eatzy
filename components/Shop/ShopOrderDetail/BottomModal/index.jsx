import { View, Text, TouchableOpacity } from 'react-native';
import styles from './BottomModal.style';
import DynamicIcon from '../../../../shared/Icons/DynamicIcon';

const BottomModal = ({ onPress }) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.leftBlock}>
        <Text style={styles.timeText}>Order complete in </Text>
        <Text style={styles.boldText}>2:45 minutes</Text>
      </View>

      <View style={styles.rightBlock}>
        <TouchableOpacity style={styles.readyButton} onPress={onPress}>
            <DynamicIcon type="AntDesign" name="check" size={15} color="#fff" />
          <Text style={styles.readyText}>Get ready</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default BottomModal;
