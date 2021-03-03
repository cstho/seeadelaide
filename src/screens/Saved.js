import { Text, SafeAreaView, FlatList } from 'react-native';
import * as React from 'react';
import styles from '../styles/screens.style';
import Search from '../components/SearchBar' ;
import { data } from '../constants/data' ;
import { images } from '../constants/' ;
import { Tile } from 'react-native-elements';
import { SIZES, COLORS } from '../constants/theme';

export const Saved = () => {
  const categories = [
    {
      key: '1',
      text: 'Beaches',
      title: 'Beaches',
      uri: images.catBeach,
      backgroundColor: '#4A89FF',
    },
    {
      key: '2',
      title: 'Key Attractions',
      uri: data[2].image,
      backgroundColor: '#febe29',
    },
    {
      key: '3',
      text: 'FREE',
      title: 'Food',
      uri: images.catFood,
      backgroundColor: '#22bcb5',
    },
    {
      key: '4',
      title: 'Picnic',
      uri: images.catPicnic,
      backgroundColor: '#3395ff',
    },
  ];
  return (
      <SafeAreaView style = { styles.container }>
          <Search/>
          <FlatList
                    data={categories}
                    keyExtractor={item => item.key}
                    horizontal={false}
                    numColumns={1}
                    renderItem={({ item, index }) => {
                        return (
                          <Tile
                          imageSrc={item.uri}
                          title={item.title}
                          featured
                          imageContainerStyle = {{backgroundColor: 'rgba(0,0,0,0.3)'}}
                          titleStyle = {{opacity: 1}}
                          height={SIZES.width / 1.5}
                          width={SIZES.width}
                          />
                        );
                    } } />
      </SafeAreaView>
    )
}