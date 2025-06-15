import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import fonts from './constants/fonts';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


import CustomerHomeScreen from './screens/CustomerHomeScreen';
import CustomerCartDetailScreen from './screens/CustomerCartDetailScreen';
import CustomerCartScreen from './screens/CustomerCartScreen';
import CustomerSelectAddressScreen from './screens/CustomerSelectAddressScreen';
import CustomerEditAddressScreen from "./screens/CustomerEditAddressScreen";
import CustomerFoodListScreen from './screens/CustomerFoodListScreen';
import CustomerFastFoodScreen from './screens/CustomerFastFoodScreen';
import CustomerDrinksScreen from './screens/CustomerDrinksScreen';
import CustomerDessertScreen from './screens/CustomerDessertScreen';
import CustomerVoucherScreen from './screens/CustomerVoucherScreen'

import SearchBar from './shared/SearchBar/index'

import MyTabBars from './shared/BottomNavigation';
import DynamicIcon from './shared/Icons/DynamicIcon';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function getTabBarVisibility(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'CustomerHomeScreen';

  const hiddenRoutes = [
    'CustomerCartDetailScreen',
    'CustomerFoodListScreen',
    'CustomerFastFoodScreen',
    'CustomerDrinksScreen',
    'CustomerDessertScreen',
    'CustomerSelectAddressScreen',
    'CustomerEditAddressScreen',
    'CustomerVoucherScreen'
  ];

  if (hiddenRoutes.includes(routeName)) {
    return 'none';
  }

  return 'flex';
}


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CustomerHomeScreen"
        component={CustomerHomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CustomerCartScreen"
        component={CustomerCartScreen}
        options={{ headerShown: false }}
    />

    <Stack.Screen
      name="CustomerCartDetailScreen"
      component={CustomerCartDetailScreen}
      options={({ navigation }) => ({
        headerTitle: '',
        headerTitleAlign: 'center',
        headerShadowVisible: false, 
        headerStyle: {
          backgroundColor: '#F4F8F7',
          elevation: 0, 
          shadowOpacity: 0,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
          height: 90,
          paddingTop: 20,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.squareIcon}>
              <View style={styles.iconContainer}>
                <DynamicIcon type="Ionicons" name="arrow-back" size={20} color="#7e7e7e" />
              </View>
            </View>
          </TouchableOpacity>
        ),
        headerLeftContainerStyle: {
          marginLeft: 16,
          marginTop: 10,
        },
      })}
    />

      <Stack.Screen
      name="CustomerSelectAddressScreen"
      component={CustomerSelectAddressScreen}
      options={({ navigation }) => ({
        headerTitle: () => (
          <Text
            style={{
              fontSize: 16,
              color: '#7e7e7e',
              fontFamily: fonts.HelveticaNeueMedium,
            }}
          >
            Select Address
          </Text>
        ),
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#F4F8F7',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
          height: 90,
          paddingTop: 20,
        },
        headerShadowVisible: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View style={styles.squareIcon}>
              <View style={styles.iconContainer}>
                <DynamicIcon
                  type="Ionicons"
                  name="arrow-back"
                  size={20}
                  color="#7e7e7e"
                />
              </View>
            </View>
          </TouchableOpacity>
        ),
        headerLeftContainerStyle: {
          marginLeft: 16,
          marginTop: 10,
        },
      })}
    />

    <Stack.Screen
      name="CustomerEditAddressScreen"
      component={CustomerEditAddressScreen}
      options={({ navigation }) => ({
        headerTitle: () => (
          <Text
            style={{
              fontSize: 16,
              color: '#7e7e7e',
              fontFamily: fonts.HelveticaNeueMedium,
            }}
          >
            Edit Address
          </Text>
        ),
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#F4F8F7',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
          height: 90,
          paddingTop: 20,
        },
        headerShadowVisible: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View style={styles.squareIcon}>
              <View style={styles.iconContainer}>
                <DynamicIcon
                  type="Ionicons"
                  name="arrow-back"
                  size={20}
                  color="#7e7e7e"
                />
              </View>
            </View>
          </TouchableOpacity>
        ),
        headerLeftContainerStyle: {
          marginLeft: 16,
          marginTop: 10,
        },
      })}
    />



      <Stack.Screen
        name="CustomerFoodListScreen"
        component={CustomerFoodListScreen}
        options={({ navigation }) => ({
         headerTitle: () => (
            <View style={{ width: '110%' }}>
              <SearchBar placeholder="Search for food" />
            </View>
        ),
          headerTitleAlign: 'left',

          headerTitleAlign: 'left', 
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#F4F8F7',
            elevation: 0,
            shadowOpacity: 0,
            shadowColor: 'transparent',
            borderBottomWidth: 0,
            height: 90,
            paddingTop: 20,
            
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.squareIcon}>
                <View style={styles.iconContainer}>
                  <DynamicIcon
                    type="Ionicons"
                    name="arrow-back"
                    size={20}
                    color="#7e7e7e"
                  />
                </View>
              </View>
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            marginLeft: 16,
            marginTop: 10,
          },
        })}
      />  


      <Stack.Screen
        name="CustomerFastFoodScreen"
        component={CustomerFastFoodScreen}
        options={({ navigation }) => ({
         headerTitle: () => (
            <View style={{ width: '110%' }}>
              <SearchBar placeholder="Search for fast food" />
            </View>
        ),
          headerTitleAlign: 'left',

          headerTitleAlign: 'left', 
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#F4F8F7',
            elevation: 0,
            shadowOpacity: 0,
            shadowColor: 'transparent',
            borderBottomWidth: 0,
            height: 90,
            paddingTop: 20,
            
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.squareIcon}>
                <View style={styles.iconContainer}>
                  <DynamicIcon
                    type="Ionicons"
                    name="arrow-back"
                    size={20}
                    color="#7e7e7e"
                  />
                </View>
              </View>
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            marginLeft: 16,
            marginTop: 10,
          },
        })}
      />


      <Stack.Screen
        name="CustomerDrinksScreen"
        component={CustomerDrinksScreen}
        options={({ navigation }) => ({
         headerTitle: () => (
            <View style={{ width: '110%' }}>
              <SearchBar placeholder="Search for drink" />
            </View>
        ),
          headerTitleAlign: 'left',

          headerTitleAlign: 'left', 
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#F4F8F7',
            elevation: 0,
            shadowOpacity: 0,
            shadowColor: 'transparent',
            borderBottomWidth: 0,
            height: 90,
            paddingTop: 20,
            
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.squareIcon}>
                <View style={styles.iconContainer}>
                  <DynamicIcon
                    type="Ionicons"
                    name="arrow-back"
                    size={20}
                    color="#7e7e7e"
                  />
                </View>
              </View>
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            marginLeft: 16,
            marginTop: 10,
          },
        })}
      />


      <Stack.Screen
        name="CustomerDessertScreen"
        component={CustomerDessertScreen}
        options={({ navigation }) => ({
         headerTitle: () => (
            <View style={{ width: '110%' }}>
              <SearchBar placeholder="Search for dessert" />
            </View>
        ),
          headerTitleAlign: 'left',

          headerTitleAlign: 'left', 
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#F4F8F7',
            elevation: 0,
            shadowOpacity: 0,
            shadowColor: 'transparent',
            borderBottomWidth: 0,
            height: 90,
            paddingTop: 20,
            
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.squareIcon}>
                <View style={styles.iconContainer}>
                  <DynamicIcon
                    type="Ionicons"
                    name="arrow-back"
                    size={20}
                    color="#7e7e7e"
                  />
                </View>
              </View>
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            marginLeft: 16,
            marginTop: 10,
          },
        })}
      />


      <Stack.Screen
        name="CustomerVoucherScreen"
        component={CustomerVoucherScreen}
        options={({ navigation }) => ({
          headerTitle: () => (
            <Text
              style={{
                fontSize: 16,
                color: '#7e7e7e',
                fontFamily: fonts.HelveticaNeueMedium,
              }}
            >
              Vouchers
            </Text>
          ),
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#F4F8F7',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 90,
            paddingTop: 20,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("CustomerCartScreen")}>
              <View style={styles.squareIcon}>
                <View style={styles.iconContainer}>
                  <DynamicIcon
                    type="Ionicons"
                    name="arrow-back"
                    size={20}
                    color="#7e7e7e"
                  /> 
                </View>
              </View>
            </TouchableOpacity>
          ),

            headerRight: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.squareIcon}>
                <View style={styles.iconContainer}>
                  <DynamicIcon
                    type="FontAwesome" 
                    name="question-circle-o" 
                    size={20} 
                    color="#7e7e7e" />
                </View>
              </View>
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            marginLeft: 16,
            marginTop: 10,
          },
        })}
      />

    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    [fonts.HelveticaNeueMedium]: require('./assets/fonts/HelveticaNeueMedium.otf'),
    [fonts.HelveticaNeueBold]: require('./assets/fonts/HelveticaNeueBold.otf'),
    [fonts.HelveticaNeueBlackItalic]: require('./assets/fonts/HelveticaNeueBlackItalic.otf'),
    [fonts.HelveticaNeueMediumItalic]: require('./assets/fonts/HelveticaNeueMediumItalic.otf'),
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
          component={HomeStackScreen}
          options={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              display: getTabBarVisibility(route),
              backgroundColor: '#fff',
              borderTopWidth: 0,
              elevation: 0,
            },
          })}
        />


          <Tab.Screen
            name="Cart"
            component={CustomerCartScreen}
            options={({ navigation }) => ({
              headerTitle: () => (
                <View style={{ paddingHorizontal: 16 }}>
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
                <TouchableOpacity
                  onPress={() => navigation.navigate("Home")}
                  style={{ marginLeft: 16 }}
                >
                  <View style={styles.squareIcon}>
                    <View style={styles.iconContainer}>
                      <DynamicIcon
                        type="Ionicons"
                        name="arrow-back"
                        size={20}
                        color="#7e7e7e"
                      />
                    </View>
                  </View>
                </TouchableOpacity>
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
  
 squareIcon: {
  width: 40,
  height: 40,
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 100,
  
},

iconContainer: {
  paddingHorizontal: 10,
  justifyContent: 'center',
  alignItems: 'center',
},

});