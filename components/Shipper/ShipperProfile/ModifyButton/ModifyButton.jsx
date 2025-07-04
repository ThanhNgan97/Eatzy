import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DynamicIcon from "../../../../shared/Icons/DynamicIcon";
import styles from "./ModifyButton.style";

const ModifyButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.modifyButton}
      onPress={() => navigation.navigate("ShipperProfileEditScreen")}
    >
      <Text style={styles.modifyText}>Modify</Text>
      <DynamicIcon type="Feather" name="edit" size={14} color="white" />
    </TouchableOpacity>
  );
};

export default ModifyButton;
