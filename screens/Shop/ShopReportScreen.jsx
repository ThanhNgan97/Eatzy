import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ShopReport from "../../components/Shop/ShopReport/ShopReport";
import fonts from "../../constants/fonts";

const ShopReportScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#2B2B2B" />
        </TouchableOpacity>
        <Text style={styles.title}>Report</Text>
      </View>

      <ShopReport />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 10,
  },

  backButton: {
    padding: 8,
    borderRadius: 100,
    backgroundColor: "#fff",
    marginRight: 10,
    elevation: 2,
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#33363F",
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    fontFamily: fonts.HelveticaNeueMedium,
  },
});

export default ShopReportScreen;
