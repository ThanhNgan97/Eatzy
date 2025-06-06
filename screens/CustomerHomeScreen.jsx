import { View, StyleSheet } from 'react-native';
import AddressBar from '../components/CustomerHome/AddressBar/index'

const CustomerHomeScreen = () => {
  return (
    <View style={styles.container}>
      <AddressBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent:'flex-start',
    alignItems:'center'
  },
});

export default CustomerHomeScreen;
