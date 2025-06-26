// File: LocationPicker.js
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import ProvinceList from "./Province/ProvinceList";
import DistrictList from "./District/DistrictList";
import WardList from "./Ward/WardList";
import styles from "./LocationPicker.style";

const LocationPicker = () => {
  const [step, setStep] = useState("province");
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedWard, setSelectedWard] = useState(null);

  const handleProvinceSelect = (province) => {
    setSelectedProvince(province);
    setSelectedDistrict(null);
    setSelectedWard(null);
    setStep("district");
  };

  const handleDistrictSelect = (district) => {
    setSelectedDistrict(district);
    setSelectedWard(null);
    setStep("ward");
  };

  const handleWardSelect = (ward) => {
    setSelectedWard(ward);
    console.log("\u0110\u1ecba ch\u1ec9:", {
      province: selectedProvince?.name,
      district: selectedDistrict?.name,
      ward: ward.name,
    });
  };

  const handleReset = () => {
    setStep("province");
    setSelectedProvince(null);
    setSelectedDistrict(null);
    setSelectedWard(null);
  };

 const renderHeader = () => (
  <View style={styles.selectedHeaderContainer}>
    <View style={styles.selectedHeaderRow}>
      <Text style={styles.sectionHeaderText}>Khu vực được chọn</Text>
      <TouchableOpacity onPress={handleReset}>
        <Text style={styles.resetText}>Thiết lập lại</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.selectedItemsFlow}>
      {selectedProvince && (
        <View style={styles.selectedItemContainer}>
          <View
            style={
              step === "province"
                ? styles.radioOuterSelected
                : styles.radioOuter
            }
          >
            {step === "province" && <View style={styles.radioInnerSelected} />}
          </View>
          <Text
            style={[
              styles.selectedText,
              step === "province" && styles.selectedTextActive,
            ]}
          >
            {selectedProvince.name}
          </Text>
        </View>
      )}

      {selectedDistrict && (
        <>
          <View style={styles.verticalLine} />
          <View style={styles.selectedItemContainer}>
            <View
              style={
                step === "district"
                  ? styles.radioOuterSelected
                  : styles.radioOuter
              }
            >
              {step === "district" && <View style={styles.radioInnerSelected} />}
            </View>
            <Text
              style={[
                styles.selectedText,
                step === "district" && styles.selectedTextActive,
              ]}
            >
              {selectedDistrict.name}
            </Text>
          </View>
        </>
      )}

      {selectedWard && (
        <>
          <View style={styles.verticalLine} />
          <View style={styles.selectedItemContainer}>
            <View
              style={
                step === "ward" ? styles.radioOuterSelected : styles.radioOuter
              }
            >
              {step === "ward" && <View style={styles.radioInnerSelected} />}
            </View>
            <Text
              style={[
                styles.selectedText,
                step === "ward" && styles.selectedTextActive,
              ]}
            >
              {selectedWard.name}
            </Text>
          </View>
        </>
      )}
    </View>

    <Text style={styles.sectionTitle}>
      {step === "province"
        ? "Tỉnh/Thành phố"
        : step === "district"
        ? "Quận/Huyện"
        : "Phường/Xã"}
    </Text>
  </View>
);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {renderHeader()}

      {step === "province" && (
        <ProvinceList
          selectedProvinceId={selectedProvince?.id}
          onSelect={handleProvinceSelect}
        />
      )}

      {step === "district" && selectedProvince && (
        <DistrictList
          provinceId={selectedProvince.name}
          selectedDistrictId={selectedDistrict?.id}
          onSelect={handleDistrictSelect}
        />
      )}

      {step === "ward" && selectedDistrict && (
        <WardList
          districtId={selectedDistrict.name}
          selectedWardId={selectedWard?.id}
          onSelect={handleWardSelect}
        />
      )}
    </SafeAreaView>
  );
};

export default LocationPicker;
