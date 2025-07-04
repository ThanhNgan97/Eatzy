import React from "react";
import { View, Text } from "react-native";
import styles from "./InfoCard.style";

const InfoCard = () => {
  return (
    <View style={styles.container}>
        <View style={styles.infoCard}>
        <View style={styles.infoRow}>
            <Text style={styles.label}>Full name</Text>
            <Text style={styles.value}>Anh Thư Nguyễn</Text>
        </View>
        <View style={styles.infoRow}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>thub22035xx@student.ctu.edu.vn</Text>
        </View>
        <View style={styles.infoRow}>
            <Text style={styles.label}>Phone</Text>
            <Text style={styles.value}>0983456789</Text>
        </View>
        <View style={styles.infoRow}>
            <Text style={styles.label}>Address</Text>
            <Text style={styles.value}>
            123 Trần Hưng Đạo, P. Xuân Khánh{"\n"}Q. Ninh Kiều. Tp. Cần Thơ
            </Text>
        </View>
        </View>

    </View>

  );
};

export default InfoCard;
