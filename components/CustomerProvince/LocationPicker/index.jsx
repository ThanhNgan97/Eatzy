import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { useState, useMemo } from "react";
import styles from "./LocationPicker.style";
import allLocations from "./locationPickerData";
import DynamicIcon from "../../../shared/Icons/DynamicIcon";

const LocationPickerWithSearch = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState("Cần Thơ");

  const filteredLocations = useMemo(() => allLocations, []);

  const groupedLocations = useMemo(() => {
    const selectedItems = filteredLocations.filter((loc) =>
      ["Cần Thơ", "Quận Ninh Kiều", "Phường An Khánh"].includes(loc.name)
    );
    const otherItems = filteredLocations.filter(
      (loc) => !["Cần Thơ", "Quận Ninh Kiều", "Phường An Khánh"].includes(loc.name)
    );

    return [
      { id: "selected-header", name: "", type: "selected-header" },
      ...selectedItems,
      { id: "all-header", name: "Tỉnh/Thành Phố", type: "header" },
      ...otherItems.sort((a, b) => a.name.localeCompare(b.name)),
    ];
  }, [filteredLocations]);

  const renderItem = ({ item }) => {
    if (item.type === "header" || item.type === "selected-header") {
      return item.name ? (
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>{item.name}</Text>
        </View>
      ) : <View style={{ height: 8 }} />; // khoảng cách nhóm
    }

    const isSelected = selectedLocation === item.name;

    return (
      <TouchableOpacity onPress={() => setSelectedLocation(item.name)} style={styles.locationItem}>
        <View style={styles.locationContent}>
          {["Cần Thơ", "Quận Ninh Kiều", "Phường An Khánh"].includes(item.name) ? (
            <View style={[styles.radioButton, isSelected && styles.radioButtonSelected]}>
              {isSelected && <View style={styles.radioButtonInner} />}
            </View>
          ) : null}

          <Text
            style={[
              styles.locationText,
              isSelected && styles.locationTextSelected,
              !["Cần Thơ", "Quận Ninh Kiều", "Phường An Khánh"].includes(item.name) && {
                textAlign: "left",
              },
            ]}
          >
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={groupedLocations}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingVertical: 10 }}
        ListFooterComponent={
          <View style={styles.confirmContainer}>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => {
                console.log("Đã chọn:", selectedLocation);
                navigation.goBack();
              }}
            >
              <Text style={styles.confirmText}>Xác nhận - {selectedLocation}</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default LocationPickerWithSearch;
