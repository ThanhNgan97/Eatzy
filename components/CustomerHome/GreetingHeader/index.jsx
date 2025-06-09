import { View, Text } from "react-native";
import DynamicIcon from "../../../shared/Icons/DynamicIcon";
import styles from './GreetingHeader.style'

const Index = () => {
  return (
    <View style={styles.greetingHeaderRow}>
      <View style={styles.greetingHeaderColumn}>
        <Text style={styles.greetingHeaderHello}>Hello 👋</Text>
        <Text style={styles.greetingHeaderUser}>Thanh Ngân</Text>
      </View>

      <View style={styles.greetingHeaderIconRow}>
        <View style={styles.greetingHeaderSquare}>
          <DynamicIcon type="Feather" name="search" size={20} color="#33363F" />
        </View>

        <View style={styles.greetingHeaderSquare}>
          <DynamicIcon type="Feather" name="bell" size={20} color="#33363F" />
        </View>
      </View>
    </View>
  );
};

export default Index;
