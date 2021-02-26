import { Text, SafeAreaView, FlatList } from 'react-native';
import * as React from 'react';
import styles from '../styles/screens.style';
import Search from '../components/SearchBar' ;
import data from '../constants/data' ;
import { Tile } from 'react-native-elements';

export const Saved = () => {
  const categories = [
    {
      key: '1',
      text: 'Beaches',
      title: 'Beaches',
      // uri: data[1].image,
      backgroundColor: '#4A89FF',
    },
    {
      key: '2',
      title: 'Key Attractions',
      // uri: data[2].image,
      backgroundColor: '#febe29',
    },
    {
      key: '3',
      text: 'FREE',
      title: 'Food',
      // uri: data[3].image,
      backgroundColor: '#22bcb5',
    },
    {
      key: '4',
      title: 'Recreational',
      // uri: data[5].image,
      backgroundColor: '#3395ff',
    },
  ];
  return (
      <SafeAreaView style = { styles.container }>
          <Search/>
          <FlatList
                    data={categories}
                    keyExtractor={item => item.key}
                    // numColumns={1}
                    renderItem={({ item, index }) => {
                        return (
                          <Tile
                          imageSrc={item.uri}
                          title={item.title}
                          featured
                          />
                        );
                    } } />
      </SafeAreaView>
    )
}