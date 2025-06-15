import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import styles from "./VoucherItem.style";

const VoucherSupportModal = ({ showModal, setShowModal }) => {
  return (
    <Modal
      visible={showModal}
      transparent
      animationType="slide"
      onRequestClose={() => setShowModal(false)}
    >
      <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>

      <View style={styles.modalContainer}>
        <Text style={styles.header}>Support</Text>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>How to Use Voucher </Text>
          <Text style={styles.sectionText}>
            To apply a Shopee voucher, please press the "Save" button to get the voucher to your voucher wallet.
          </Text>

          <Text style={styles.sectionTitle}>How to Find Voucher</Text>
          <Text style={styles.sectionText}>
            You can find Shopee Vouchers throughout the Shopee.vn website and app. 
            A tip for you is to start from the promotional pages and your voucher page!
          </Text>
        </View>

        <Pressable style={styles.underStandButton} onPress={() => setShowModal(false)}>
          <Text style={styles.underStandButtonText}>Understand</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default VoucherSupportModal;
