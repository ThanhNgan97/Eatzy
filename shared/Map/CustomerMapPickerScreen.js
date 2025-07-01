
import { useState } from "react"
import { View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ActivityIndicator, 
  SafeAreaView } 
  from "react-native"
import * as Location from "expo-location"
import Map from "../../shared/Map/Map"
import fonts from "../../constants/fonts"


const CustomerMapPickerScreen = ({ navigation, route }) => {
  const [addressText, setAddressText] = useState("Fetching address...")
  const [currentCoords, setCurrentCoords] = useState(null)
  const [loading, setLoading] = useState(true)

  const { onLocationSelected } = route.params || {}

  const formatAddress = (place) => {
    const addressParts = [place.name, 
      place.street, place.subdistrict, 
      place.district, place.city, place.region].filter(
      (part) => part && part.trim() !== ""
    )

    return addressParts.join(", ") || "Unable to determine address"
  }

  const handleRegionChange = async (coords) => {
    setCurrentCoords(coords)
    try {
      const [place] = await Location.reverseGeocodeAsync(coords)
      const address = formatAddress(place)
      setAddressText(address)
    } catch (error) {
      console.error("Error retrieving address:", error)
      setAddressText("Unable to retrieve address")
    }
  }

  const handleLocationReady = async (coords) => {
    setLoading(false)
    await handleRegionChange(coords)
  }

  const handleConfirm = () => {
    if (currentCoords && addressText) {
      const selectedLocation = {
        coordinates: currentCoords,
        address: addressText,
        timestamp: new Date().toISOString(),
      }

      if (onLocationSelected) {
        onLocationSelected(selectedLocation)
      }

      navigation.goBack()
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.addressBox}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color="#68BD6C" />
            <Text style={styles.loadingText}>Fetching location...</Text>
          </View>
        ) : (
          <Text style={styles.addressText} numberOfLines={3}>
            📍{addressText}
          </Text>
        )}
      </View>

      <Map
        onLocationReady={handleLocationReady}
        onRegionChangeComplete={handleRegionChange}
        showMyLocationButton={true}
      />

      <View style={styles.confirmBox}>
        <TouchableOpacity
          style={[styles.confirmButton, (loading || !currentCoords) && styles.confirmButtonDisabled]}
          onPress={handleConfirm}
          disabled={loading || !currentCoords}
        >
          <Text style={styles.confirmText}>
            {loading ? "Loading..." : "Confirm this location"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  addressBox: {
    position: "absolute",
    top: 20,
    left: 20,
    right: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
    zIndex: 999,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    maxHeight: 100,
  },

  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  loadingText: {
    marginLeft: 8,
    fontFamily: fonts.HelveticaNeueMedium,
    fontSize: 14,
    color: "#666",
  },

  addressText: {
    fontFamily: fonts.HelveticaNeueMedium,
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },

  confirmBox: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
  },

  confirmButton: {
    backgroundColor: "#68BD6C",
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  confirmButtonDisabled: {
    backgroundColor: "#ccc",
    elevation: 0,
    shadowOpacity: 0,
  },

  confirmText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueBold,
  },
})

export default CustomerMapPickerScreen
