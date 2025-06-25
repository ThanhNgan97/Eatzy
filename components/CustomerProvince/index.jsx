// LocationPicker.jsx
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
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
        <Text style={styles.sectionHeaderText}>Khu vực \u0111\u01b0\u1ee3c ch\u1ecdn</Text>
        <TouchableOpacity onPress={handleReset}>
          <Text style={styles.resetText}>Thi\u1ebft l\u1eadp l\u1ea1i</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.selectedItemsFlow}>
        {selectedProvince && (
          <View style={styles.selectedItemContainer}>
            <View style={styles.radioOuterSelected}>
              <View style={styles.radioInnerSelected} />
            </View>
            <Text style={styles.selectedText}>{selectedProvince.name}</Text>
          </View>
        )}

        {selectedDistrict && (
          <>
            <View style={styles.verticalLine} />
            <View style={styles.selectedItemContainer}>
              <View style={styles.radioOuter} />
              <Text style={styles.selectedText}>{selectedDistrict.name}</Text>
            </View>
          </>
        )}

        {selectedWard && (
          <>
            <View style={styles.verticalLine} />
            <View style={styles.selectedItemContainer}>
              <View style={styles.radioOuter} />
              <Text style={styles.selectedText}>{selectedWard.name}</Text>
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
      {step === "province" && (
        <FlatList
          ListHeaderComponent={renderHeader}
          data={[]}
          renderItem={null}
          ListFooterComponent={
            <ProvinceList
              selectedProvinceId={selectedProvince?.id}
              onSelect={handleProvinceSelect}
            />
          }
        />
      )}
      {step === "district" && selectedProvince && (
        <FlatList
          ListHeaderComponent={renderHeader}
          data={[]}
          renderItem={null}
          ListFooterComponent={
            <DistrictList
              provinceId={selectedProvince.id}
              selectedDistrictId={selectedDistrict?.id}
              onSelect={handleDistrictSelect}
            />
          }
        />
      )}
      {step === "ward" && selectedDistrict && (
        <FlatList
          ListHeaderComponent={renderHeader}
          data={[]}
          renderItem={null}
          ListFooterComponent={
            <WardList
              districtId={selectedDistrict.id}
              selectedWardId={selectedWard?.id}
              onSelect={handleWardSelect}
            />
          }
        />
      )}
    </SafeAreaView>
  );
};

export default LocationPicker;
