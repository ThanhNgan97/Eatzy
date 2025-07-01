import React, { useState, useLayoutEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import NameInput from "../../components/EditAddress/NameInput/input";
import PhoneInput from "../../components/EditAddress/PhoneInput";
import AddressSelector from "../../components/EditAddress/AddressSelector/index";
import ButtonAddress from "../../components/EditAddress/ButtonAddress";
import AddressDisplay from "../../components/EditAddress/AddressDisplay";
import DynamicIcon from "../../shared/Icons/DynamicIcon";
import CustomAlert from "../../shared/CustomAlert/CustomAlert";

import fonts from "../../constants/fonts";

const EditAddressScreen = () => {
  const navigation = useNavigation();
  const [showAlert, setShowAlert] = useState(false);

  const handleBack = () => {
    setShowAlert(true);
  };

  const handleConfirmExit = () => {
    setShowAlert(false);
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={handleBack}>
          <View style={styles.squareIcon}>
            <View style={styles.iconContainer}>
              <DynamicIcon
                type="Ionicons"
                name="arrow-back"
                size={20}
                color="#7e7e7e"
              />
            </View>
          </View>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <NameInput />
        <PhoneInput />
        <AddressDisplay />
        <AddressSelector />
      </ScrollView>

      <View style={styles.fixedButton}>
        <ButtonAddress />
      </View>

      <CustomAlert
        visible={showAlert}
        title="Are you sure you want to exit?"
        message="Changes have not been saved. Are you sure you want to discard them?"
        onClose={() => setShowAlert(false)}
        onConfirm={handleConfirmExit}
        confirmText="Discard"
        cancelText="Cancel"
        containerStyle={styles.alertContainer}
        titleStyle={styles.alertTitle}
        messageStyle={styles.alertMessage}
        confirmButtonStyle={styles.alertConfirmButton}
        cancelButtonStyle={styles.alertCancelButton}
        confirmTextStyle={styles.alertConfirmText}
        cancelTextStyle={styles.alertCancelText}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 10,
    paddingBottom: 100,
    marginTop: 10,
  },
  fixedButton: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  squareIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    borderRadius: 100,
    padding: 4,
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  alertContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
  },

  alertTitle: {
    color: "#68BD6C",
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueBold,
  },

  alertMessage: {
    color: "#7e7e7e",
    fontSize: 14,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  alertConfirmButton: {
    backgroundColor: "#68BD6C",
    paddingVertical: 5,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  alertCancelButton: {
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#68BD6C",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  alertConfirmText: {
    color: "#fff",
    fontFamily: fonts.HelveticaNeueBold,
    textAlign: "center",
  },

  alertCancelText: {
    color: "#68BD6C",
    textAlign: "center",
    fontFamily: fonts.HelveticaNeueBold,
  },
});

export default EditAddressScreen;
