import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import CustomerHomeScreen from './screens/CustomerHomeScreen';
import CustomerCartScreen from './screens/CustomerCartScreen';
import fonts from './constants/fonts'; 
import MyTabBars from './shared/BottomNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DynamicIcon from './shared/Icons/DynamicIcon';


const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    [fonts.HelveticaNeueMedium]: require('./assets/fonts/HelveticaNeueMedium.otf'),
    [fonts.HelveticaNeueBold]: require('./assets/fonts/HelveticaNeueBold.otf'),
    [fonts.HelveticaNeueBlackItalic]: require('./assets/fonts/HelveticaNeueBlackItalic.otf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator tabBar={(props) => <MyTabBars {...props} />}>
            <Tab.Screen
              name="Home"
              component={CustomerHomeScreen}
              options={{ headerShown: false }}
            />

          <Tab.Screen
            name="Cart"
            component={CustomerCartScreen}
            options={({ navigation }) => ({
              headerTitle: () => (
                <View style={{ paddingHorizontal: 16, marginTop: 0 }}>
                  <Text
                    style={{
                      color: '#7e7e7e',
                      fontSize: 18,
                      fontFamily: fonts.HelveticaNeueMedium,
                    }}
                  >
                    Cart
                  </Text>
                </View>
              ),
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#F4F8F7',
                elevation: 0,
                shadowOpacity: 0,
                height: 90,
                paddingTop: 20,
              },
              headerLeft: () => (
                <View style={styles.squareIcon}>
                  <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={styles.iconContainer}>
                      <DynamicIcon type="Ionicons" name="arrow-back" size={20} color="#7e7e7e" />
                    </View>
                  </TouchableOpacity>
                </View>
              ),
            })}
          />

            <Tab.Screen
              name="Payment"
            
              component={CustomerHomeScreen}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Profile"
              component={CustomerHomeScreen}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8F7',
  },
  
  iconContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  squareIcon:{
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    borderRadius:100,
    marginHorizontal:16,
    marginTop:10
  }
});
