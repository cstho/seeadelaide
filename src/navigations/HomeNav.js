import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../screens/Home';
import Home_2 from '../screens/Home_2';
import { Detail } from '../screens/Detail';
import Detail_2 from '../screens/Detail_2';
import { DestinationDetail } from '../screens/DestinationDetail';
import MapScreen from '../components/MapScreen'

const Stack = createStackNavigator();

function HomeNav() {
    return (
      // <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName='Home_2' screenOptions={{ headerShown: false }}>
        {/* <Stack.Navigator initialRouteName='Home_2' headerMode='none'> */}
          <Stack.Screen name="Home_2" component={Home_2} />
          <Stack.Screen name="Detail_2" component={Detail_2} />
          <Stack.Screen name="DestinationDetail" component={DestinationDetail} />
          <Stack.Screen name="MapScreen" component={MapScreen} />
        </Stack.Navigator>
      // </NavigationContainer>
    );
  }
  
  export default HomeNav;