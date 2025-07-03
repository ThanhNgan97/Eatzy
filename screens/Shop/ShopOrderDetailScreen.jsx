import { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

import OrderItemCard from "../../components/Shop/ShopOrderDetail/OrderItemCard/index";
import BottomModal from "../../components/Shop/ShopOrderDetail/BottomModal/index";
import CallBottomModal from "../../components/Shop/ShopOrderDetail/CallBottomModal/index";
import CustomerBadge from "../../components/Shop/ShopOrderDetail/CustomerBadge";
import OrderBadge from "../../components/Shop/ShopOrderDetail/OrderBadge";
import DynamicIcon from "../../shared/Icons/DynamicIcon";

const ShopOrderDetailScreen = ({ navigation, route }) => {
  const [callModalVisible, setCallModalVisible] = useState(false);

  useEffect(() => {
    console.log("Route params:", route?.params);
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => setCallModalVisible(true)}
          style={styles.headerIcon}
        >
          <DynamicIcon
            type="Feather"
            name="phone"
            size={18}
            color="#7e7e7e"
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.tab}>
          <CustomerBadge />
          <OrderBadge />
          <OrderItemCard />
        </View>
      </ScrollView>

      <BottomModal />

      <CallBottomModal
        visible={callModalVisible}
        onClose={() => setCallModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: "relative",
    backgroundColor: "#F4F8F7",
  },
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 100,
    alignItems: "stretch",
  },
  tab: {
    width: "100%",
    gap: 12,
  },
  headerIcon: {
    marginRight: 16,
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ShopOrderDetailScreen;
