import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ShipperHomeScreen from "./screens/ShipperHomeScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ShipperHome" component={ShipperHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
