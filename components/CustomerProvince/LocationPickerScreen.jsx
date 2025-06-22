import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './LocationPicker.style';
import ProvinceList from './ProvinceList';
import DistrictList from './DistrictList';
import WardList from './WardList';

const LocationPickerScreen = () => {
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedWard, setSelectedWard] = useState(null);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Chọn Tỉnh / Thành phố</Text>
      <ProvinceList onSelect={setSelectedProvince} selected={selectedProvince} />
      {selectedProvince && (
        <>
          <Text style={styles.title}>Chọn Quận / Huyện</Text>
          <DistrictList
            province={selectedProvince}
            onSelect={setSelectedDistrict}
            selected={selectedDistrict}
          />
        </>
      )}
      {selectedDistrict && (
        <>
          <Text style={styles.title}>Chọn Phường / Xã</Text>
          <WardList
            district={selectedDistrict}
            onSelect={setSelectedWard}
            selected={selectedWard}
          />
        </>
      )}
    </ScrollView>
  );
};

export default LocationPickerScreen;
