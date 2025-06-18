import React from 'react'
import { TouchableOpacity , View, Text} from 'react-native';
import DynamicIcon from '../../../shared/Icons/DynamicIcon';
import styles from './PaymentMethod.style';
import { useNavigation } from '@react-navigation/native';

const PaymentMethod = () => {

    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate("CustomerPaymentMethodScreen");
    }


  return (
    <View style ={styles.container}>
        <Text style={styles.paymentMethodTitle}>Payment Method</Text>
        <View style={styles.card}>
            <View style={styles.seeAllContainer}>
            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
            </View>


            <View style={styles.row}>
                <View style={styles.rectangleIcon}>
                    <DynamicIcon
                        type="FontAwesome" 
                        name="credit-card"  
                        size={20} 
                        color="#68BD6C" 
                    />
                </View>
                <Text style={styles.paymentMethodText}>E-banking</Text>
                <View style={styles.rectangle}>
                    <Text style={styles.paymentMethodRecommended}>Recommended</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.rectangleIcon}>
                    <DynamicIcon 
                        type="FontAwesome" 
                        name="money" 
                        size={20} 
                        color="#68BD6C"
                />
                </View>
                <Text style={styles.paymentMethodText}>Cash on Delivery (COD)</Text>     
            </View>


        </View>

    </View>
  )
}

export default PaymentMethod