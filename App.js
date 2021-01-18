import * as functions from './ScreenContainer';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo-app-loading';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons'; // here, do a call "ionicons" font

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'RobotoBold' : require('./src/fonts/Roboto-Bold.ttf'),
      'RobotoRegular' : require('./src/fonts/Roboto-Regular.ttf'),
      ionicons: Ionicons.font['ionicons'] // and here is what changes so that the font loads
    });
    this.setState({ isReady: true });
  }

  render() {
    return (
      <NavigationContainer>
        <functions.MyTabs />
      </NavigationContainer>
    );
  }
}