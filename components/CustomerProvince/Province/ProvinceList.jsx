import { FlatList, Text, TouchableOpacity, View } from "react-native";
import provinces from "./provincesData";
import styles from "../LocationPicker.style";

const ProvinceList = ({ onSelect, selectedProvinceId }) => {
  return (
    <FlatList
      data={provinces}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onSelect({ id: item, name: item })}
          style={[
            styles.item,
            selectedProvinceId === item && styles.selectedItem
          ]}
        >
          <View style={styles.radioOuter}>
            {selectedProvinceId === item && <View style={styles.radioInner} />}
          </View>
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      )}
    />
  );
};


export default ProvinceList;
