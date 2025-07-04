import React from "react";
import { Text } from "react-native";
import styles from "./Timestamp.style";

const Timestamp = ({ time }) => <Text style={styles.timeText}>{time}</Text>;

export default Timestamp;
