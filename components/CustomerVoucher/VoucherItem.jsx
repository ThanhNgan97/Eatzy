import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./VoucherItem.style";
import DynamicIcon from "../../shared/Icons/DynamicIcon";
import VoucherTermsModal from "./VoucherTermsModal";
import dayjs from "dayjs";

const VoucherItem = ({
  image,
  title,
  subtitle,
  usedPercent,
  isSelected,
  onSelect,
}) => {
  const [showModal, setShowModal] = useState(false);

  const now = dayjs();
  const validFrom = now.format("DD MMM YYYY HH:mm");
  const validTo = now.add(5, "day").format("DD MMM YYYY HH:mm");

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.ticketImage} />

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>

        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBarFill, { width: `${usedPercent}%` }]} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.usedText}>{usedPercent}% used</Text>
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <Text style={styles.tcText}>T&Cs</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={onSelect}
        style={[styles.checkboxItem, isSelected && styles.checked]}
      >
        {isSelected && (
          <DynamicIcon
            type="MaterialIcons"
            name="check"
            size={14}
            color="#fff"
          />
        )}
      </TouchableOpacity>

      <VoucherTermsModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        validFrom={validFrom}
        validTo={validTo}
      />
    </View>
  );
};

export default VoucherItem;
