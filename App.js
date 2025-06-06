import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import CustomerHomeScreen from './screens/CustomerHomeScreen';
import fonts from './constants/fonts'; 
import MyTabBars from './shared/BottomNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    [fonts.HelveticaNeueMedium]: require('./assets/fonts/HelveticaNeueMedium.otf'),
    [fonts.HelveticaNeueBold]: require('./assets/fonts/HelveticaNeueBold.otf'),
    [fonts.HelveticaNeueBlackItalic]: require('./assets/fonts/HelveticaNeueBlackItalic.otf'),
  });

  

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator tabBar={(props) => <MyTabBars {...props}/>}>
            <Tab.Screen name='Home' component={CustomerHomeScreen} options={{headerShown: false}}/>
            <Tab.Screen name ='Cart' component={CustomerHomeScreen} options={{headerShown: false}}/>
            <Tab.Screen name ='Payment' component={CustomerHomeScreen} options={{headerShown: false}}/>
            <Tab.Screen name ='Profile' component={CustomerHomeScreen} options={{headerShown: false}}/>
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
});
