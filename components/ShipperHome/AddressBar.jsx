import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const AddressBar = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="location-pin" size={16} color="#3E8245" />
      <Text style={styles.text}>
        Hẻm 12 Đ. 3 Tháng 2, Hưng Lợi, Ninh Kiều, Cần Thơ
      </Text>
    </View>
  );
};

export default AddressBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E1F3E3",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#3E8245",
    marginLeft: 5,
    fontSize: 12,
  },
});
