import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import {
  weeklyData,
  monthlyData,
} from "../../components/Shipper/ShiperIncome/IncomeChart/IncomeData";

import BalanceWithdraw from "../../components/Shipper/ShiperIncome/BalanceWithdraw/BalanceWithdraw";
import IncomeChart from "../../components/Shipper/ShiperIncome/IncomeChart/IncomeChart";
import IncomeSummary from "../../components/Shipper/ShiperIncome/IncomeSummary/IncomeSummary";

const ShipperIncomeScreen = () => {
  const [activeTab, setActiveTab] = useState("Week");
  const data = activeTab === "Week" ? weeklyData : monthlyData;

  return (
    <ScrollView style={styles.container}>
      <BalanceWithdraw />
      <IncomeChart
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        data={data}
      />
      <IncomeSummary />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f8f7",
    padding: 16,
  },
});

export default ShipperIncomeScreen;
