import { StyleSheet, ScrollView, View } from "react-native";
import fonts from "../../constants/fonts";

import HeaderBanner from "../../components/Shipper/ShipperProfile/HeaderBanner/HeaderBanner";
import AvatarInfo from "../../components/Shipper/ShipperProfile/AvatarInfo/AvatarInfo";
import ModifyButton from "../../components/Shipper/ShipperProfile/ModifyButton/ModifyButton";
import StatsSection from "../../components/Shipper/ShipperProfile/StatBox/StatBoxSection";
import RecentOrders from "../../components/Shipper/ShipperProfile/RecentOrders/RecentOrders";
import LogoutButton from "../../components/Shipper/ShipperProfile/LogoutButton/LogoutButton";

const ShipperProfileScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderBanner />
      <AvatarInfo />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <ModifyButton />
        <StatsSection />
        <RecentOrders />
        <LogoutButton />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },

  scroll: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  buttonContainer: {
    paddingHorizontal: 16,
  },

  button: {
    marginTop: 16,
    backgroundColor: "#68BD6C",
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueBold,
  },
});

export default ShipperProfileScreen;
