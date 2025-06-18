import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import PaymentMethodItem from "../components/CustomerPaymentMethods/PaymentMethod/PaymentMethodItem";
import AddMethodList from "../components/CustomerPaymentMethods/AddPaymentMethod/AddMethodList";

const CustomerPaymentMethodScreen = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <PaymentMethodItem
        selectedMethod={selectedMethod}
        setSelectedMethod={setSelectedMethod}
      />

      <AddMethodList
        selectedMethod={selectedMethod}
        setSelectedMethod={setSelectedMethod}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

export default CustomerPaymentMethodScreen;
