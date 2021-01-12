import React, { Component } from 'react';
import * as Google from 'expo-google-app-auth';
import * as Test from './testfunc.js';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// First- obtain access token from Expo's Google API

export class SignIn extends Component {

  state = {
    logged: 'Signed in'
  }

  googleSignIn = async () => {
    if (this.state.logged != 'Signed in')
    {
      const { type, accessToken, user } = await Google.logInAsync({
        androidClientId: '1028854562585-mmqdqdtqrit6e8e0a01sro57tkd9mob8.apps.googleusercontent.com',
        iosClientId: '1028854562585-9pmab1onorsna0i3ariuuab2pmoaakaq.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (type === 'success') {
        // Then you can use the Google REST API
        // let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        //   headers: { Authorization: `Bearer ${accessToken}` },
        // });
        //Test.testFunc();
        alert("success!");
        this.setState({
          logged: 'Signed in'
        });
        return;
      }
      else {
        alert("failed.");
        return;
      }
    }
    else {
      alert("already logged in");
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.googleSignIn()}><Text>{this.state.logged}</Text></TouchableOpacity>
      </View>
    )
  }
}
