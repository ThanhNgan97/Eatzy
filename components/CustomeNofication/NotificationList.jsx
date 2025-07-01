import React from "react";
import { ScrollView} from "react-native";
import NotificationItem from "./NotificationItem";
import styles from "./Notification.style";

const notifications = [
  {
    icon: "tag",
    iconColor: "#FF6D00",
    iconBackground: "#FFF3E0",
    title: "Càng thân, càng có nhiều quà",
    description: "Khám phá ưu đãi khi giới thiệu bạn bè...",
    time: "9:08 SA",
    unread: true,
  },
  {
    icon: "mail",
    iconColor: "#388E3C",
    iconBackground: "#E8F5E9",
    title: "Đánh giá trải nghiệm ăn uống của bạn",
    description: "Bạn thấy Mì Trộn MiHi - Hồ Bún Xáng như thế nào?",
    time: "Th 3",
    unread: true,
  },
  {
    icon: "gift",
    iconColor: "#AB47BC",
    iconBackground: "#F3E5F5",
    title: "Dùng thử GrabUnlimited",
    description: "Tận hưởng quyền lợi freeship mọi đơn hàng...",
    time: "Th 3",
    unread: true,
  },
  {
    icon: "volume-2",
    iconColor: "#D84315",
    iconBackground: "#FBE9E7",
    title: "Chuyển ưu đãi tới quầy Coca-Cola",
    description: "QC • Coca-Cola",
    time: "Th 3",
    thumbnail: "https://product.hstatic.net/1000284478/product/1660648714-coca_cola-1_f790c7ff17c34d36ad69f1ad80410b89.png",
  },
];


const NotificationList = () => {
  return (
    <ScrollView style={styles.container}>
      {notifications.map((item, index) => (
        <NotificationItem key={index} {...item} />
      ))}
    </ScrollView>
  );
};

export default NotificationList;
