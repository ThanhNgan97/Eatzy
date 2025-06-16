import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapSection = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 21.0285,
          longitude: 105.8542,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{ latitude: 21.0285, longitude: 105.8542 }}
          title="Vị trí của bạn"
          description="Bạn đang ở đây"
        />
      </MapView>
    </View>
  );
};

export default MapSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 24,
  },

  map: {
    flex: 1,
    width: "100%",
    height: 250,
  },
});
