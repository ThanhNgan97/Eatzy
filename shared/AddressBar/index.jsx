import { View, Text, TouchableOpacity } from "react-native";
import DynamicIcon from "../Icons/DynamicIcon.js";
import styles from "./AddressBar.style.jsx";
import { useNavigation } from "@react-navigation/native";

const Index = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("CustomerSelectAddressScreen");
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.addressRectangle}>
        <View style={styles.addressRow}>
          <DynamicIcon
            type="Feather"
            name="map-pin"
            size={11}
            color="#3E8245"
          />
          <Text style={styles.addressText}>
            Hẻm 12 Đ. 3 Tháng 2, Hưng Lợi, Ninh Kiều, Cần Thơ
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Index;
