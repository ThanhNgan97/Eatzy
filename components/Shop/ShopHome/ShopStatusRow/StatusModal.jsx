import React from "react";
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import styles from "./ShopStatusRow.style"
import fonts from "../../../../constants/fonts";

const StatusModal = ({
  visible,
  onClose,
  options,
  selected,
  onSelect,
  getColor,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={styles.dropdownItem}
                  onPress={() => onSelect(option)}
                >
                  <View style={styles.statusDotWrapper}>
                    <View
                      style={[styles.statusDot, { backgroundColor: getColor(option) }]}
                    />
                    <Text
                      style={[
                        styles.dropdownItemText,
                        option === selected && {
                          fontWeight: fonts.HelveticaNeueBold,
                          color: getColor(option),
                        },
                      ]}
                    >
                      Shop is {option.toLowerCase()}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default StatusModal;
