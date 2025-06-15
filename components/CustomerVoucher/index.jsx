import React, { useLayoutEffect, useState } from "react";
import {View, Text,TouchableOpacity} from "react-native";
import styles from "./VoucherItem.style";
import Vouchers from "./Vouchers";
import { useNavigation } from "@react-navigation/native";
import DynamicIcon from "../../shared/Icons/DynamicIcon";
import VoucherSupportModal from "./VoucherSupportModal";

const VoucherList = ({ title = "Discounted code" }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelect = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const [showModal, setShowModal] = useState(false);


  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <View style={styles.squareIcon}>
            <View style={styles.iconContainer}>
              <DynamicIcon
                type="FontAwesome"
                name="question-circle-o"
                size={20}
                color="#7e7e7e"
              />
            </View>
          </View>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.containerIndex}>
      <Text style={styles.voucherText}>{title}</Text>

      <Vouchers
        selectedItems={selectedItems}
        toggleSelect={toggleSelect}
    />


      <VoucherSupportModal showModal = {showModal} setShowModal={setShowModal}/>
    </View>
  );
};

export default VoucherList;
