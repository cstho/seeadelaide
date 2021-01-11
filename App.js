import * as React from 'react';
import * as functions from './ScreenContainer'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <functions.MyTabs />
    </NavigationContainer>
  );
}
