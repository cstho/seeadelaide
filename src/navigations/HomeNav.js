import React, {useEffect, useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Detail_2 from '../screens/Detail_2';
import MapScreen from '../components/MapScreen'
import LoginScreen from '../screens/LoginScreen';
import * as firebase from 'firebase' ;

const Stack = createStackNavigator();

function HomeNav() {
  const [state, setState] = useState(false) ;
  const [isLoading, setIsLoading] = useState(false) ;
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
            setState(true) ;
        } 
        else {
            setState(false) ;
        }
    })
    console.log(state) ;
    return unsubscribe ;
}) ;
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {(state) ? (
            <>
            <Stack.Screen name="Home_2" component={Home} />
            <Stack.Screen name="Detail_2" component={Detail} />
            <Stack.Screen name="MapScreen" component={MapScreen} />
            </>
          ) : (
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          )}
        </Stack.Navigator>
    );
  }
  
  export default HomeNav;