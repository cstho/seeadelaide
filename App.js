// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as Google from 'expo-google-app-auth';

const tempstr = "empty"

// First- obtain access token from Expo's Google API
async function googleSignIn() {

  const { type, accessToken, user } = await Google.logInAsync({
    androidClientId: '1028854562585-mmqdqdtqrit6e8e0a01sro57tkd9mob8.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
  });

  if (type === 'success') {
    // Then you can use the Google REST API
    // let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
    //   headers: { Authorization: `Bearer ${accessToken}` },
    // });

    alert("success!");
    return;
  }
  else {
    alert("failed.");
    return;
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => googleSignIn()}><Text>Sign-in</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
