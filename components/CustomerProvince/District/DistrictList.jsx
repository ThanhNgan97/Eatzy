import { FlatList, Text, TouchableOpacity, View } from "react-native";
import districts from "./districtsData";
import styles from "../LocationPicker.style";


const DistrictList = ({ provinceId, onSelect, selectedDistrictId }) => {
  const filtered = districts.filter(d => d.provinceId === provinceId);

  return (
    <FlatList
      data={filtered}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onSelect(item)}
          style={[
            styles.item,
            selectedDistrictId === item.id && styles.selectedItem,
          ]}
        >
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default DistrictList;
