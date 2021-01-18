import { Text, View, SafeAreaView} from 'react-native';
import * as React from 'react';
import styles from './src/styles/loginScreen.style';
import LoginScreen from './src/screens/LoginScreen';
import { Home } from './src/screens/Home';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-ionicons';

export function Saved() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Saved Section!</Text>
    </SafeAreaView>
  );
}

export function Notifications() {
  return (
    <View style={styles.container}>
      <Text>Notifications!</Text>
    </View>
  );
}

export function Profile() {
  return (
    <LoginScreen />
  );
}

const Tab = createMaterialBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#3E1B72"
      inactiveColor="#b0acb0"
      barStyle={{ backgroundColor: 'white', borderRadius: 100 }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}