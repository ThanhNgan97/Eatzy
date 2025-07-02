import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./ShipperIncome.style";

const weeklyData = [
  { date: "15/01", value: 230890 },
  { date: "16/01", value: 421212 },
  { date: "17/01", value: 310918 },
  { date: "18/01", value: 113326 },
  { date: "19/01", value: 251121 },
  { date: "20/01", value: 198564 },
  { date: "21/01", value: 256932 },
];

const monthlyData = [
  { date: "Jan", value: 1520890 },
  { date: "Feb", value: 1230000 },
  { date: "Mar", value: 980000 },
  { date: "Apr", value: 1450000 },
  { date: "May", value: 1520890 },
  { date: "Jun", value: 1230000 },
  { date: "Jul", value: 980000 },
];

const ShipperIncome = () => {
  const [activeTab, setActiveTab] = useState("Week");

  const incomeData = activeTab === "Week" ? weeklyData : monthlyData;
  const maxValue = Math.max(...incomeData.map((item) => item.value));
  const totalIncome = incomeData.reduce((sum, item) => sum + item.value, 0);

  return (
    <ScrollView style={styles.container}>
      {/* Số dư có thể rút */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Bạn có thể nhận được 2,205,004₫</Text>
        <TouchableOpacity style={styles.withdrawButton}>
          <Text style={styles.withdrawButtonText}>Rút tiền</Text>
        </TouchableOpacity>
      </View>

      {/* Biểu đồ thu nhập */}
      <View style={styles.chartContainer}>
        <View style={styles.tabContainer}>
          {["Week", "Month"].map((tab) => (
            <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
              <Text
                style={
                  activeTab === tab ? styles.activeTab : styles.inactiveTab
                }
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>
          Thu nhập {activeTab === "Week" ? "tuần" : "tháng"} tạm tính
        </Text>
        <Text style={styles.totalIncome}>
          {totalIncome.toLocaleString("vi-VN")}₫
        </Text>

        {incomeData.map((item, index) => (
          <View key={index} style={styles.barRow}>
            <Text style={styles.barDate}>{item.date}</Text>
            <View style={styles.barWrapper}>
              <View
                style={[
                  styles.bar,
                  {
                    width: `${(item.value / maxValue) * 100}%`,
                  },
                ]}
              />
            </View>
            <Text style={styles.barValue}>
              {item.value.toLocaleString("vi-VN")}₫
            </Text>
          </View>
        ))}
      </View>

      {/* Thu nhập theo đơn */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryHeader}>
          <Text style={styles.sectionTitle}>Thu nhập theo đơn</Text>
          <Text style={styles.orderCount}>193 đơn hàng</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={[styles.symbol, { color: "red" }]}>$</Text>
          <Text style={styles.summaryLabel}>Phí giao hàng</Text>
          <Text style={styles.summaryValue}>432,187₫</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={[styles.symbol, { color: "green" }]}>$</Text>
          <Text style={styles.summaryLabel}>Tiền khách thưởng</Text>
          <Text style={styles.summaryValue}>106,225₫</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={[styles.symbol, { color: "gold" }]}>$</Text>
          <Text style={styles.summaryLabel}>Tiền công ty thưởng</Text>
          <Text style={styles.summaryValue}>399,250₫</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ShipperIncome;
