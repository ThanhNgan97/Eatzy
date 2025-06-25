import { FlatList, Text, TouchableOpacity, View } from "react-native";
import provinces from "./provincesData";
import styles from "../LocationPicker.style";

const ProvinceList = ({ onSelect, selectedProvinceId }) => {
  return (
    <FlatList
      data={provinces}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onSelect(item)}
          style={[
            styles.item,
            selectedProvinceId === item.id && styles.selectedItem,
          ]}
        >
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default ProvinceList;
