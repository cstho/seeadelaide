//import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { SignIn } from './modules/googlesignin.js';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//import loginScreen from './modules/loginScreen.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Press below:</Text>
      <SignIn/>
    </View>
  );
}

//export default loginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
