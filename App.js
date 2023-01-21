import React from 'react'
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import PromosScreen from './src/screens/PromosScreen';

//Screen names
const promoName = "Promo";
const homeName = "Beranda";
const detailsName = "Notifikasi";
const settingsName = "Setting";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


import {
  StartScreen,
  LoginScreen,
  LoginPhoneScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  Home,
  KonsumenLunas,
  ScrollScreen,
  OnboardingScreen,
} from './src/screens'


function MainMenu() {
  return (
    <Tab.Navigator
    initialRouteName={homeName}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let rn = route.name;

        if (rn === homeName) {
          iconName = focused ? 'home' : 'home-outline';

        } else if (rn === detailsName) {
          iconName = focused ? 'list' : 'list-outline';

        } else if (rn === settingsName) {
          iconName = focused ? 'settings' : 'settings-outline';
        } else if (rn === promoName) {
          iconName = focused ? 'basket' : 'basket-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
   >

    
    <Tab.Screen name={homeName} component={HomeScreen}
          options={{
            title: 'Beranda',
            headerTitleStyle: {
              color: '#fff',
            },
            headerStyle: {
              backgroundColor: '#26517b',
            },
          }} />
    <Tab.Screen name={detailsName} component={DetailsScreen} 
          options={{
            headerTitleStyle: {
              color: '#fff',
            },
            headerStyle: {
              backgroundColor: '#347183',
            },
          }} />
    <Tab.Screen name={promoName} component={PromosScreen} 
        options={{
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: '#88337f',
          },
        }} />
    <Tab.Screen name={settingsName} component={SettingsScreen} 
      options={{
        headerTitleStyle: {
          color: '#fff',
        },
        headerStyle: {
          backgroundColor: '#347183',
        },
      }} />
  </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
          <Stack.Navigator  initialRouteName="OnboardingScreen"
          screenOptions={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          >
          <Stack.Screen
          name="MainMenu"
          component={MainMenu}

          />
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <Stack.Screen name="ScrollScreen" component={ScrollScreen} />
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="LoginPhoneScreen" component={LoginPhoneScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="KonsumenLunas" component={KonsumenLunas} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
      </Stack.Navigator>
    </NavigationContainer>

    </Provider>
  )

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
}


