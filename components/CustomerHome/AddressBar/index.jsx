import { View, Text } from "react-native";
// import DynamicIcon from "../../../shared/Icons/DynamicIcon.js";
// import DynamicIcon from "../../../shared/Icons/DynamicIcon.Js";
import DynamicIcon from "../../../shared/Icons/DynamicIcon.js";
import styles from "./AddressBar.style";

const Index = () => {
  return (
    <View style={styles.addressRectangle}>
      <View style={styles.addressRow}>
        <DynamicIcon type="Feather" name="map-pin" size={11} color="#3E8245" />
        <Text style={styles.addressText}>
          Hẻm 12 Đ. 3 Tháng 2, Hưng Lợi, Ninh Kiều, Cần Thơ 
        </Text>
      </View>
    </View>
  );
};

export default Index;

