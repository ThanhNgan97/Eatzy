import React from 'react'
import { View, Text } from 'react-native'
import styles from './PaymentTotal.style'

const PaymentTotal = () => {
  const totals = [
    { label: 'Price', value: '-70.000đ' },
    { label: 'Shipping fee', value: '-10.000đ' },
    { label: 'VAT', value: '-0.000đ' },
    { label: 'Total', value: '-80.000đ' },
  ];

  return (
    <View style={styles.container}>
    {totals.map((item, index) => (
        <View key={index} style={styles.row}>
        <Text style={item.label === 'Total' ? styles.totalText : styles.allText}>
            {item.label}
        </Text>
        <Text style={item.label === 'Total' ? styles.totalPrice : styles.allPrice}>
            {item.value}
        </Text>
        </View>
    ))}
    </View>

  )
}

export default PaymentTotal
