import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  Pressable,
  Alert,
  Linking,
} from 'react-native';

import * as Clipboard from 'expo-clipboard'; 
import people from './callBottomModalData'; 
import styles from './CallBottomModal.style';
import DynamicIcon from '../../../../shared/Icons/DynamicIcon';

const CallBottomModal = ({ visible, onClose }) => {
  const handleCopyPhone = async (phone) => {
    try {
      await Clipboard.setStringAsync(phone);
      Alert.alert('📋 Copied', `${phone}`);
    } catch (error) {
      Alert.alert('❌ Error', 'Unable to copy phone number.');
    }
  };

  const handleCall = (phone) => {
    const phoneNumber = `tel:${phone}`;
    Linking.canOpenURL(phoneNumber)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(phoneNumber);
        } else {
          Alert.alert('⚠️ Error', 'This device does not support phone calls.');
        }
      })
      .catch((err) => console.error('Call error:', err));
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.container} onPress={() => {}}>
          <Text style={styles.title}>Who are you calling for?</Text>

          {people.map((person, index) => (
            <View key={index} style={styles.row}>
              <Image source={person.avatar} style={styles.avatar} />
              <View style={styles.info}>
                <View style={styles.column}>
                    <Text style={styles.name}>{person.name}</Text>
                    <Text style={styles.phone}>{person.phone}</Text>

                </View>
                <View style={styles.rectangleRole}>
                    <Text style={styles.role}>{person.role}</Text>
                </View>
              </View>

              <View style={styles.actions}>
                <TouchableOpacity
                  onPress={() => handleCopyPhone(person.phone)}
                  style={styles.iconWrapper}
                >
                  <DynamicIcon
                    type="Feather"
                    name="copy"
                    size={15}
                    color="#68BD6C"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => handleCall(person.phone)}
                style={styles.iconWrapper}
                >
                  <DynamicIcon
                    type="Feather"
                    name="phone"
                    size={15}
                    color="#68BD6C"
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default CallBottomModal;
