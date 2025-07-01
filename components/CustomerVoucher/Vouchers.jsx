import React from "react";
import voucherData from "./voucherFeeData";
import VoucherItem from "./VoucherItem";
import { View } from "react-native";

const Vouchers = ({ selectedItems, toggleSelect }) => {
  return (
    <View>
      {voucherData.map((item) => (
        <VoucherItem
          key={item.id}
          image={item.image}
          title={item.title}
          subtitle={item.subtitle}
          usedPercent={item.usedPercent}
          isSelected={selectedItems.includes(item.id)}
          onSelect={() => toggleSelect(item.id)}
          onConfirm={() => {
            console.log("Voucher xác nhận:", item.id);
          }}
        />

      ))}
    </View>
  );
};


export default Vouchers;
