import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import addresses from "./addressData";
import DynamicIcon from "../../../shared/Icons/DynamicIcon";
import styles from "./AddressScreen.style";

const AddressScreen = () => {
  const [selectedAddressId, setSelectedAddressId] = useState(
    addresses.find((item) => item.isDefault)?.id || null
  );

  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Address</Text>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {addresses.map((item) => {
          const isSelected = selectedAddressId === item.id;

          return (
            <TouchableOpacity
              key={item.id.toString()}
              onPress={() => setSelectedAddressId(item.id)}
              style={[
                styles.card,
                isSelected && {
                  borderColor: "#68BD6C",
                  borderWidth: 1,
                },
              ]}
            >
              <View style={styles.row}>
                <DynamicIcon
                  type="Ionicons"
                  name={isSelected ? "radio-button-on" : "radio-button-off"}
                  size={20}
                  color="#68BD6C"
                />
                <Text style={styles.name}>{item.name}</Text>

                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() =>
                    navigation.navigate("CustomerEditAddressScreen", {
                      addressId: item.id, // bạn có thể truyền dữ liệu nếu cần
                    })
                  }
                >
                  <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.column}>
                <Text style={styles.phone}>{item.phone}</Text>
                <Text style={styles.address}>{item.addressLine1}</Text>
                <Text style={styles.address}>{item.addressLine2}</Text>
              </View>

              {isSelected && (
                <View style={styles.defaultTagContainer}>
                  <Text style={styles.defaultTag}>Default</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default AddressScreen;
