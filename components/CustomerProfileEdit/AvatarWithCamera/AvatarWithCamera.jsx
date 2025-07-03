import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import DynamicIcon from "../../../shared/Icons/DynamicIcon";
import styles from "./AvatarWithCamera.stye";
import CustomAlert from "../../../shared/CustomAlert/CustomAlert"; 

const AvatarWithCamera = () => {
  const [avatarUri, setAvatarUri] = useState(null)
  const [showAlert, setShowAlert] = useState(false)

  const handlePickImage = async (type) => {
    try {
      let result
      if (type === "camera") {
        result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        })
      } else {
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        })
      }

      if (result && !result.canceled && result.assets?.length > 0) {
        setAvatarUri(result.assets[0].uri)
      }
    } catch (error) {
      Alert.alert("Lỗi", "Không thể chọn ảnh.")
    } finally {
      setShowAlert(false)
    }
  }

  const checkPermissionsAndShowAlert = async () => {
    const mediaPermission = await ImagePicker.requestMediaLibraryPermissionsAsync()
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync()

    if (!mediaPermission.granted) {
      return Alert.alert("Permission Denied", "Bạn cần cấp quyền thư viện ảnh.")
    }

    if (!cameraPermission.granted) {
      return Alert.alert("Permission Denied", "Bạn cần cấp quyền máy ảnh.")
    }

    setShowAlert(true)
  }

  return (
    <View style={styles.avatarWrapper}>
      <Image
        source={{
          uri:
            avatarUri ||
            "https://media.sketchfab.com/models/c41b089c7d124489aa89f00951e72333/thumbnails/607a856ccb424b07aa197b3a368f0273/c3be82ddafe844618f565b032f5a302b.jpeg",
        }}
        style={styles.avatar}
      />
      <TouchableOpacity style={styles.cameraIconWrapper} onPress={checkPermissionsAndShowAlert}>
        <DynamicIcon type="Ionicons" name="camera" size={18} color="white" />
      </TouchableOpacity>

      <CustomAlert
        visible={showAlert}
        title="Chọn ảnh"
        message="Bạn muốn chụp ảnh hay chọn từ thư viện?"
        onClose={() => setShowAlert(false)}
        onConfirm={() => handlePickImage("camera")}
        onCancel={() => handlePickImage("library")}
        cancelText="Thư viện"
        confirmText="Camera"
        containerStyle={styles.alertContainer}
        titleStyle={styles.alertTitle}
        messageStyle={styles.alertMessage}
        confirmButtonStyle={styles.confirmButton}
        cancelButtonStyle={styles.cancelButton}
        confirmTextStyle={styles.confirmText}
        cancelTextStyle={styles.cancelText}
      />
    </View>
  )
}


export default AvatarWithCamera;
