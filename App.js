import * as functions from './ScreenContainer';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <functions.MyTabs />
    </NavigationContainer>
  );
}

