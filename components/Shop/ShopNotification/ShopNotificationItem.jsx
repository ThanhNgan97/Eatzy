import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./ShopNotification.style";
import DynamicIcon from "../../../shared/Icons/DynamicIcon";

const ShopNotificationItem = ({
  icon,
  iconColor = "#222222",
  iconBackground = "#eee",
  title,
  description,
  time,
  unread,
  thumbnail,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={[styles.iconWrapper, { backgroundColor: iconBackground }]}>
          <DynamicIcon type="Feather" name={icon} size={20} color={iconColor} />
        </View>

        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.time}>{time}</Text>
            {unread && <View style={styles.unreadDot} />}
          </View>
          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>
        </View>

        {thumbnail && (
          <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
        )}
      </View>
    </View>
  );
};

export default ShopNotificationItem;
