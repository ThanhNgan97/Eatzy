import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import VoucherFee from "../../components/CustomerVoucher/index";
import fonts from "../../constants/fonts";
import { useNavigation } from "@react-navigation/native";

const CustomerVoucherScreen = () => {
  const navigation = useNavigation();

  const handleConfirm = () => {
    console.log("Voucher đã được chọn");
    navigation.navigate("CustomerCartScreen");
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <VoucherFee />
      </ScrollView>

      <View style={styles.fixedButtonContainer}>
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    paddingBottom: 80,
  },

  fixedButtonContainer: {
    position: "absolute",
    bottom:0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 30,
  },

  confirmButton: {
    backgroundColor: "#68BD6C",
    borderRadius: 30,
    paddingVertical: 10,
    alignItems: "center",
    marginBottom:30
  },

  confirmButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueBold,
  },
});

export default CustomerVoucherScreen;
