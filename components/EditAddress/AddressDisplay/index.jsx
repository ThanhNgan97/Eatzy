import React, { useCallback, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import styles from "./AddressDisplay.style";
import DynamicIcon from "../../../shared/Icons/DynamicIcon";

const AddressDisplay = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedAddress, setSelectedAddress] = useState("");

  useFocusEffect(
    useCallback(() => {
      if (route.params?.address) {
        setSelectedAddress(route.params.address);
        console.log("Đã nhận:", route.params.address);
      }
    }, [route.params?.address])
  );

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>
            Province/City, District, Ward/Commune
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate( "CustomerProvinceScreen")}
          >
            <View style={{ transform: [{ rotate: "0deg" }] }}>
              <DynamicIcon
                type="MaterialIcons"
                name="keyboard-arrow-right"
                size={18}
                color="#484C4D"
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.addressWrapper}>
          <Text style={styles.value}>{selectedAddress}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AddressDisplay;
