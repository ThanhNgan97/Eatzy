import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import DynamicIcon from "../../../shared/Icons/DynamicIcon";
import styles from './GreetingHeader.style';

const Index = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.greetingHeaderRow}>
      {!isSearching && (
        <View style={styles.greetingHeaderColumn}>
          <Text style={styles.greetingHeaderHello}>Hello 👋</Text>
          <Text style={styles.greetingHeaderUser}>Thanh Ngân</Text>
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

        <View style={styles.greetingHeaderSquare}>
          <DynamicIcon type="Feather" name="bell" size={20} color="#33363F" />
        </View>
      </View>
    </View>
  );
};

export default Index;
