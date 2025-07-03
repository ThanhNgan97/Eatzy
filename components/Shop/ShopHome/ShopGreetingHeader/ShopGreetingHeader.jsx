import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import DynamicIcon from "../../../../shared/Icons/DynamicIcon";
import { useNavigation } from '@react-navigation/native';
import styles from "./ShopGreetingHeader.style";


const ShopGreetingHeader = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.greetingHeaderRow}>
      {!isSearching && (
        <View style={styles.greetingHeaderColumn}>
          <Text style={styles.greetingHeaderHello}>Hello 👋</Text>
          <Text style={styles.greetingHeaderUser}>Núi Lửa Shop 💦</Text>
        </View>
      )}

      <View style={[styles.greetingHeaderIconRow, { flex: 1, justifyContent: "flex-end" }]}>
        {isSearching ? (
          <View style={[styles.searchWrapper, { flex: 1, marginRight: 12 }]}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor="#999"
              value={searchText}
              onChangeText={setSearchText}
              autoFocus
              onBlur={() => setIsSearching(false)}
            />
          </View>
        ) : (
          <TouchableOpacity onPress={() => setIsSearching(true)}>
            <View style={styles.greetingHeaderSquare}>
              <DynamicIcon type="Feather" name="search" size={20} color="#33363F" />
            </View>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => navigation.navigate('ShopNotificationScreen')}>
          <View style={styles.greetingHeaderSquare}>
            <DynamicIcon type="Feather" name="bell" size={20} color="#33363F" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default ShopGreetingHeader;
