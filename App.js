import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import fonts from "./constants/fonts";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

//CustomerScreen
import CustomerHomeScreen from "./screens/Customer/CustomerHomeScreen";
import CustomerCartDetailScreen from "./screens/Customer/CustomerCartDetailScreen";
import CustomerCartScreen from "./screens/Customer/CustomerCartScreen";
import CustomerSelectAddressScreen from "./screens/Customer/CustomerSelectAddressScreen";
import CustomerEditAddressScreen from "./screens/Customer/CustomerEditAddressScreen";
import CustomerFoodListScreen from "./screens/Customer/CustomerFoodListScreen";
import CustomerFastFoodScreen from "./screens/Customer/CustomerFastFoodScreen";
import CustomerDrinksScreen from "./screens/Customer/CustomerDrinksScreen";
import CustomerDessertScreen from "./screens/Customer/CustomerDessertScreen";
import CustomerVoucherScreen from "./screens/Customer/CustomerVoucherScreen";
import CustomerPaymentScreen from "./screens/Customer/CustomerPaymentScreen";
import CustomerPaymentMethodScreen from "./screens/Customer/CustomerPaymentMethodScreen";
import CustomerProvinceScreen from "./screens/Customer/CustomerProvinceScreen";
import CustomerNotificationScreen from "./screens/Customer/CustomerNotificationScreen";

//ShopScreen
import ShopOrderDetailScreen from "./screens/Shop/ShopOrdersScreen";
import ShopMenuScreen from "./screens/Shop/ShopMenuScreen";
import ShopOrdersScreen from "./screens/Shop/ShopOrdersScreen";
import ShopReportScreen from "./screens/Shop/ShopReportScreen";
import ShopHomeScreen from "./screens/Shop/ShopHomeScreen";
import ShopScreen from "./screens/Shop/ShopScren";
import AddFoodScreen from "./screens/Shop/AddFoodScreen";

//ShiperScreen

import AddressBar from "./shared/AddressBar/index";
import SearchBar from "./shared/SearchBar/index";
import MyTabBars from "./shared/BottomNavigation";
import DynamicIcon from "./shared/Icons/DynamicIcon";
import CustomerMapPickerScreen from "./shared/Map/CustomerMapPickerScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const createHeaderOptions =
  (title, navigationTarget = "Home") =>
  ({ navigation }) => ({
    headerShown: true,
    headerTitle: () => (
      <View style={{ paddingHorizontal: 16 }}>
        <Text
          style={{
            color: "#7e7e7e",
            fontSize: 18,
            fontFamily: fonts.HelveticaNeueMedium,
          }}
        >
          {title}
        </Text>
      </View>
    ),
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: "#F4F8F7",
      elevation: 0,
      shadowOpacity: 0,
      shadowColor: "transparent",
      borderBottomWidth: 0,
      borderBottomColor: "transparent",
      height: 90,
      paddingTop: 20,
    },
    headerShadowVisible: false,
    headerLeftContainerStyle: {
      paddingLeft: 0,
      paddingTop: 4,
    },
    headerLeft: () => (
      <TouchableOpacity
        onPress={() =>
          navigationTarget === "goBack"
            ? navigation.goBack()
            : navigation.navigate(navigationTarget)
        }
        style={{ marginLeft: 16 }}
      >
        <View style={styles.squareIcon}>
          <View style={styles.iconContainer}>
            <DynamicIcon
              type="MaterialIcons"
              name="arrow-back"
              size={24}
              color="#7e7e7e"
            />
          </View>
        </View>
      </TouchableOpacity>
    ),
  });

//api placeholder
// const role = 'user';
const role = "shop";

const CustomerTab = (getHeaderOptions) => () =>
  (
    <Tab.Navigator tabBar={(props) => <MyTabBars {...props} />}>
      <Tab.Screen
        name="Home"
        component={CustomerHomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Cart"
        component={CustomerCartScreen}
        options={createHeaderOptions("Cart", "Home")}
      />
      <Tab.Screen
        name="Payment"
        component={CustomerPaymentScreen}
        options={createHeaderOptions("Payment", "Home")}
      />
      <Tab.Screen
        name="Profile"
        component={CustomerHomeScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );

const ShopTab = (getHeaderOptions) => () =>
  (
    <Tab.Navigator tabBar={(props) => <MyTabBars {...props} />}>
      <Tab.Screen
        name="Home"
        component={ShopHomeScreen}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Orders"
        component={ShopOrdersScreen}
        options={getHeaderOptions("Cart")}
      />
      <Tab.Screen
        name="Report"
        component={ShopReportScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={getHeaderOptions("Shop")}
      />
    </Tab.Navigator>
  );

const ShipperTab = (getHeaderOptions) => () =>
  <Tab.Navigator tabBar={(props) => <MyTabBars {...props} />}></Tab.Navigator>;

export default function App() {
  const [fontsLoaded] = useFonts({
    [fonts.HelveticaNeueMedium]: require("./assets/fonts/HelveticaNeueMedium.otf"),
    [fonts.HelveticaNeueBold]: require("./assets/fonts/HelveticaNeueBold.otf"),
    [fonts.HelveticaNeueBlackItalic]: require("./assets/fonts/HelveticaNeueBlackItalic.otf"),
    [fonts.HelveticaNeueMediumItalic]: require("./assets/fonts/HelveticaNeueMediumItalic.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const getHeaderOptions = (title, target) =>
    createHeaderOptions(title, target);

  const RoleBasedTab =
    role == "user" ? CustomerTab : role == "shop" ? ShopTab : ShipperTab;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={RoleBasedTab(getHeaderOptions)}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="CustomerHomeScreen"
          component={CustomerHomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="CustomerCartDetailScreen"
          component={CustomerCartDetailScreen}
          options={({ navigation }) => ({
            headerTitle: "",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#F4F8F7",
              elevation: 0,
              shadowOpacity: 0,
              shadowColor: "transparent",
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
          name="CustomerEditAddressScreen"
          component={CustomerEditAddressScreen}
          options={({ navigation }) => ({
            headerTitle: () => (
              <Text
                style={{
                  fontSize: 16,
                  color: "#7e7e7e",
                  fontFamily: fonts.HelveticaNeueMedium,
                }}
              >
                Edit Address
              </Text>
            ),
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#F4F8F7",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              height: 90,
              paddingTop: 20,
            },
            headerShadowVisible: false,
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
          name="CustomerFoodListScreen"
          component={CustomerFoodListScreen}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={{ width: "110%" }}>
                <SearchBar placeholder="Search for food" />
              </View>
            ),
            headerTitleAlign: "left",

            headerTitleAlign: "left",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#F4F8F7",
              elevation: 0,
              shadowOpacity: 0,
              shadowColor: "transparent",
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
              <View style={{ width: "110%" }}>
                <SearchBar placeholder="Search for fast food" />
              </View>
            ),
            headerTitleAlign: "left",

            headerTitleAlign: "left",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#F4F8F7",
              elevation: 0,
              shadowOpacity: 0,
              shadowColor: "transparent",
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
              <View style={{ width: "110%" }}>
                <SearchBar placeholder="Search for drink" />
              </View>
            ),
            headerTitleAlign: "left",

            headerTitleAlign: "left",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#F4F8F7",
              elevation: 0,
              shadowOpacity: 0,
              shadowColor: "transparent",
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
              <View style={{ width: "110%" }}>
                <SearchBar placeholder="Search for dessert" />
              </View>
            ),
            headerTitleAlign: "left",

            headerTitleAlign: "left",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#F4F8F7",
              elevation: 0,
              shadowOpacity: 0,
              shadowColor: "transparent",
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
                  color: "#7e7e7e",
                  fontFamily: fonts.HelveticaNeueMedium,
                }}
              >
                Vouchers
              </Text>
            ),
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#F4F8F7",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              height: 90,
              paddingTop: 20,
            },
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("CustomerCartScreen")}
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

            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
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
            headerLeftContainerStyle: {
              marginLeft: 16,
              marginTop: 10,
            },
          })}
        />

        <Stack.Screen
          name="CustomerMapPickerScreen"
          component={CustomerMapPickerScreen}
          options={({ navigation }) => ({
            headerTitle: () => (
              <Text
                style={{
                  fontSize: 16,
                  color: "#7e7e7e",
                  fontFamily: fonts.HelveticaNeueMedium,
                }}
              >
                Edit Address
              </Text>
            ),
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#F4F8F7",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              height: 90,
              paddingTop: 20,
            },
            headerShadowVisible: false,
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
          name="CustomerNotificationScreen"
          component={CustomerNotificationScreen}
          options={({ navigation }) => ({
            headerTitle: () => (
              <Text
                style={{
                  fontSize: 16,
                  color: "#7e7e7e",
                  fontFamily: fonts.HelveticaNeueMedium,
                }}
              >
                Notification
              </Text>
            ),
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#F4F8F7",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              height: 90,
              paddingTop: 20,
            },
            headerShadowVisible: false,

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

            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  console.log("Trash icon pressed");
                }}
              >
                <View style={styles.squareIcon}>
                  <View style={styles.iconContainer}>
                    <DynamicIcon
                      type="Feather"
                      name="trash-2"
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
            headerRightContainerStyle: {
              marginRight: 16,
              marginTop: 10,
            },
          })}
        />

        <Stack.Screen
          name="CustomerPaymentScreen"
          component={CustomerPaymentScreen}
          options={({ navigation }) => ({
            header: () => (
              <View
                style={{
                  backgroundColor: "#F4F8F7",
                  paddingTop: 30,
                  paddingHorizontal: 16,
                  paddingBottom: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("CustomerSelectAddressScreen")
                  }
                  style={{ marginBottom: 10 }}
                >
                  <AddressBar />
                </TouchableOpacity>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 8,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                    style={{ position: "absolute", left: 0 }}
                  >
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 100,
                        backgroundColor: "#fff",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DynamicIcon
                        type="Ionicons"
                        name="arrow-back"
                        size={18}
                        color="#7e7e7e"
                      />
                    </View>
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: "#7e7e7e",
                      fontSize: 18,
                      textAlign: "center",
                      fontFamily: fonts.HelveticaNeueMedium,
                    }}
                  >
                    Payment
                  </Text>
                </View>
              </View>
            ),
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
                  color: "#7e7e7e",
                  fontFamily: fonts.HelveticaNeueMedium,
                }}
              >
                Select Address
              </Text>
            ),
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#F4F8F7",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              height: 90,
              paddingTop: 20,
            },
            headerShadowVisible: false,
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

        {/* 
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
    /> */}

        <Stack.Screen
          name="CustomerCartScreen"
          component={CustomerCartScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="CustomerPaymentMethodScreen"
          component={CustomerPaymentMethodScreen}
          options={({ navigation }) => ({
            headerTitle: () => (
              <Text
                style={{
                  fontSize: 16,
                  color: "#7e7e7e",
                  fontFamily: fonts.HelveticaNeueMedium,
                }}
              >
                Payment Methods
              </Text>
            ),
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#F4F8F7",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              height: 90,
              paddingTop: 20,
            },
            headerShadowVisible: false,
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
          name="CustomerProvinceScreen"
          component={CustomerProvinceScreen}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={{ width: "110%" }}>
                <SearchBar placeholder="Search address..." />
              </View>
            ),
            headerTitleAlign: "left",
            headerStyle: {
              backgroundColor: "#F4F8F7",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              height: 90,
              paddingTop: 20,
            },
            headerShadowVisible: false,
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
          name="ShopOrderDetailScreen"
          component={ShopOrderDetailScreen}
          options={({ route, navigation }) => ({
            headerTitle: `Order ${route.params.orderCode}`,
            headerBackTitleVisible: false,
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#F4F8F7",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerShadowVisible: false,
            headerTintColor: "#33363F",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  marginLeft: 16,
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  backgroundColor: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DynamicIcon
                  type="AntDesign"
                  name="arrowleft"
                  size={20}
                  color="#7e7e7e"
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  console.log("Call pressed");
                }}
                style={{
                  marginRight: 16,
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  backgroundColor: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DynamicIcon
                  type="Feather"
                  name="phone"
                  size={18}
                  color="#7e7e7e"
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="ShopMenu"
          component={ShopMenuScreen}
          options={getHeaderOptions("Menu", "goBack")}
        />

        <Stack.Screen
          name="AddFood"
          component={AddFoodScreen}
          options={getHeaderOptions("Add new food", "goBack")}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },

  squareIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },

  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
