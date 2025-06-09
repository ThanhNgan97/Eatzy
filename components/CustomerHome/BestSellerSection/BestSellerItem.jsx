import { View, Text, Image, TouchableOpacity} from "react-native";
import styles from './BestSellerSection.style';
import DynamicIcon from "../../../shared/Icons/DynamicIcon";


const BestSellerItem = ({ name, price,image, restaurant, time }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price}</Text>
      <View style={styles.bestShellerIconRow}>
        <View style={styles.infoColumn}>
          <View style={styles.infoRow}>
            <DynamicIcon type="MaterialCommunityIcons" name="clock-time-nine-outline" size={14} color="#7e7e7e"/>
            <Text style={styles.time}>{time} min</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.addIcon}>
            <DynamicIcon type="Ionicons" name="add-outline" size={15} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default BestSellerItem;
