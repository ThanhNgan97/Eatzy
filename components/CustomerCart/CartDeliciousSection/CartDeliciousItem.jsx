import { View, Text, Image, TouchableOpacity} from "react-native";
import styles from './CartDeliciousSection.style';
import DynamicIcon from "../../../shared/Icons/DynamicIcon";


const CartDeliciousItem = ({ name, price,image }) => {
  return (
    <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View style={styles.content}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>${price}</Text>
        </View>
        <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.iconButton}>
                <DynamicIcon type="Ionicons" name="remove" size={14} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>1</Text>
            <TouchableOpacity style={styles.iconButton}>
                <DynamicIcon type="Ionicons" name="add-outline" size={14} color="#fff" />
            </TouchableOpacity>
        </View>
    </View>

  );
};


export default CartDeliciousItem;
