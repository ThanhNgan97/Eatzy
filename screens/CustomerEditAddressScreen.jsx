import React, { useLayoutEffect } from 'react';
import { Alert, ScrollView, StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NameInput from "../components/EditAddress/NameInput/input";
import PhoneInput from "../components/EditAddress/PhoneInput";
import AddressSelector from "../components/EditAddress/AddressSelector/index";
import ButtonAddress from '../components/EditAddress/ButtonAddress';
import DynamicIcon from '../shared/Icons/DynamicIcon';

const EditAddressScreen = () => {
  const navigation = useNavigation();

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

const handleBack = () => {
  Alert.alert(
    "Unsaved Changes",
    "Are you sure you want to discard your changes?",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Discard",
        onPress: () => navigation.goBack(),
        style: "destructive",
      },
    ],
    { cancelable: true }
  );
};


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <NameInput />
        <PhoneInput />
        <AddressSelector />
      </ScrollView>

      <View style={styles.fixedButton}>
        <ButtonAddress />
      </View>
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
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  squareIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {
    borderRadius: 8,
    padding: 4,
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:100
  },
});

export default EditAddressScreen;
