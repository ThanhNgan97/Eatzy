import { ScrollView, StyleSheet, View } from "react-native";
import OrderTabs from "../../components/Shop/ShopOrders/OrderTabs";
import OrderData from "../../components/Shop/ShopOrders/OrderCard/OrderData";

const ShopOrdersScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.tabWrapper}>
        <OrderTabs activeTab="Order" />
      </View>

      <View style={styles.tabOrders}>
        <OrderData/>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },

  content: {
    flexGrow:1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent:'center',
    alignItems:'center'
  },

  tabWrapper: {
  position: 'absolute',
  top: 5, 
  left: 0,
  right: 0,
},

tabOrders: {
  position: 'absolute',
  top: 60, 
  left: 20,
  right: 0,
}

});

export default ShopOrdersScreen;
