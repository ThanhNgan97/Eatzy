import { ScrollView, StyleSheet } from 'react-native'
import CartList from '../components/CustomerCartDetails/CartList/index';
import SizeSelector from "../components/CustomerCartDetails/SizeSelector/index";
import IngredientSelector from "../components/CustomerCartDetails/IngredientSelector/index";
import NoteInput from "../components/CustomerCartDetails/NoteInput/index";
import QuantityAndCart from "../components/CustomerCartDetails/QuantityAndCart/index"

const CustomerCartDetailScreen = () => {
  return (
       <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <CartList/>
            <SizeSelector/>
            <IngredientSelector/>
            <NoteInput/>
            <QuantityAndCart/>
       </ScrollView>
    
  )
}

const styles = StyleSheet.create({
     container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },

  content: {
    paddingHorizontal: 10, 
  },
})

export default CustomerCartDetailScreen
