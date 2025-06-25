import { FlatList, Text, TouchableOpacity, View } from "react-native";
import wards from "./wardsData";
import styles from "../LocationPicker.style";


const WardList = ({ districtId, onSelect, selectedWardId }) => {
  const filtered = wards.filter(w => w.districtId === districtId);

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
