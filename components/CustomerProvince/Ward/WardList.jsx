import { FlatList, Text, TouchableOpacity, View } from "react-native";
import wards from "./wardsData";
import styles from "../LocationPicker.style";

const WardList = ({ districtId, onSelect, selectedWardId }) => {
  const wardsNames = wards[districtId] || [];

  const wardsArray = wardsNames.map((name, index) => ({
    id: `${districtId}-${index}`, // tạo ID duy nhất
    name,
  }));

  return (
    <FlatList
      data={wardsArray}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onSelect(item)}
          style={[
            styles.item,
            selectedWardId === item.id && styles.selectedItem,
          ]}
        >
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default WardList;
