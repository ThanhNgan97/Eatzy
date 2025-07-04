import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import {
  weeklyData,
  monthlyData,
} from "../../components/Shipper/ShiperIncome/IncomeChart/IncomeData";

import BalanceWithdraw from "../../components/Shipper/ShiperIncome/BalanceWithdraw/BalanceWithdraw";
import IncomeChart from "../../components/Shipper/ShiperIncome/IncomeChart/IncomeChart";
import IncomeSummary from "../../components/Shipper/ShiperIncome/IncomeSummary/IncomeSummary";

const ShipperIncomeScreen = () => {
  const [activeTab, setActiveTab] = useState("Week");

  const data =
    activeTab === "Week" && Array.isArray(weeklyData)
      ? weeklyData
      : activeTab === "Month" && Array.isArray(monthlyData)
      ? monthlyData
      : [];

  const totalIncome = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <ScrollView style={styles.container}>
      <BalanceWithdraw />

      <IncomeChart
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        data={data}
      />

      <IncomeSummary data={data} />

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          Tổng thu nhập ({activeTab}):{" "}
          {totalIncome.toLocaleString("vi-VN")}₫
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f8f7",
    padding: 16,
  },
  footerContainer: {
    marginTop: 24,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#444",
    fontWeight: "500",
  },
});

export default ShipperIncomeScreen;
