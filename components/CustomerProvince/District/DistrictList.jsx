import { FlatList, Text, TouchableOpacity, View } from "react-native";
import districts from "./districtsData";
import styles from "../LocationPicker.style";


const DistrictList = ({ provinceId, onSelect, selectedDistrictId }) => {
 const districtNames = districts[provinceId] || [];

  const districtArray = districtNames.map((name, index) => ({
    id: `${provinceId}-${index}`, 
    name,
  }));

  return (
    <FlatList
      data={districtArray}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onSelect({ id: item.name, name: item.name })}
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
