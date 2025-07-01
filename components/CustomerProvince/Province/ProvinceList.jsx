import { FlatList, Text, TouchableOpacity, View } from "react-native";
import provinces from "./provincesData";
import styles from "../LocationPicker.style";

const ProvinceList = ({ onSelect, selectedProvinceId }) => {
  return (
    <FlatList
      data={provinces}
      keyExtractor={(item) => item}
      renderItem={({ item }) => {
        const isSelected = selectedProvinceId === item;

        return (
          <TouchableOpacity
            onPress={() => onSelect({ id: item, name: item })}
            style={[
              styles.item,
              isSelected && styles.selectedItem
            ]}
          >
            {isSelected ? (
              <View style={styles.radioOuter}>
                <View style={styles.radioInner} />
              </View>
            ) : (
              <View style={{ width: 20, height: 20, marginRight: 10 }} />
            )}

            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default ProvinceList;
