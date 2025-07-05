import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./IncomeChart.style";

const IncomeChart = ({ activeTab, setActiveTab, data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <View style={styles.chartContainer}>
        <Text style={styles.sectionTitle}>Không có dữ liệu</Text>
      </View>
    );
  }

  const maxValue = Math.max(...data.map((item) => item.value));
  const totalIncome = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <View style={styles.chartContainer}>
      {/* Tabs */}
        <View style={styles.tabContainer}>
          {["Week", "Month"].map((tab) => (
            <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab ? styles.activeTab : styles.inactiveTab,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>


      {/* Tổng thu nhập */}
      <Text style={styles.sectionTitle}>
        Thu nhập {activeTab === "Week" ? "tuần" : "tháng"} tạm tính
      </Text>
      <Text style={styles.totalIncome}>
        {totalIncome.toLocaleString("vi-VN")}₫
      </Text>

      {/* Bar chart */}
      {data.map((item, index) => (
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
  );
};

export default IncomeChart;
