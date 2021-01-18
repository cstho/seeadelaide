import { Text, View, SafeAreaView } from 'react-native';
import Search from '../components/SearchBar';
import Category from '../components/Category';
import * as React from 'react';
import styles from '../styles/loginScreen.style';

export const Home = () => {
    return (
      <SafeAreaView style = { styles.container }>
        <Search />
        <Category />
      </SafeAreaView>
    )
  }