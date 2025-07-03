import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

const CustomAlert = ({
  visible,
  title,
  message,
  onClose,
  onConfirm,
  onCancel, 
  containerStyle,
  titleStyle,
  messageStyle,
  confirmText = "Xác nhận",
  cancelText = "Hủy",
  confirmButtonStyle,
  cancelButtonStyle,
  confirmTextStyle,
  cancelTextStyle,
}) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <View style={[styles.alertBox, containerStyle]}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
            <Text style={[styles.message, messageStyle]}>{message}</Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                onPress={onCancel || onClose} 
                style={[styles.button, styles.cancel, cancelButtonStyle]}
              >
                <Text style={[styles.buttonText, cancelTextStyle]}>
                  {cancelText}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={onConfirm}
                style={[styles.button, styles.confirm, confirmButtonStyle]}
              >
                <Text style={[styles.buttonText, confirmTextStyle]}>
                  {confirmText}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </TouchableWithoutFeedback>
    </Modal>
  );
};


export default CustomAlert;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  alertBox: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },
  cancel: {
    backgroundColor: "#ccc",
  },
  confirm: {
    backgroundColor: "#68BD6C",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
  },
});
