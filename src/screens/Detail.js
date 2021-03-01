// import React in our code
import React, { useRef } from 'react';
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
  Button
} from 'react-native';
import { SIZES, COLORS } from '../constants/theme';
import { SliderBox } from "react-native-image-slider-box";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { icons } from '../constants';
import Map from '../components/Map'
import { LinearGradient } from 'expo-linear-gradient';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

const StarReview = ({ rate }) => {
  var starComponents = [];
  var fullStar = Math.floor(rate)
  var noStar = Math.floor(3 - rate)
  var halfStar = 3 - fullStar - noStar

  // Full Star
  for (var i = 0; i < fullStar; i++) {
      starComponents.push(
          <Image
              key={`full-${i}`}
              source={icons.starFull}
              resizeMode="cover"
              style={{
                  width: 20,
                  height: 20,
              }}
          />
      )
  }

  // Half Star
  for (var i = 0; i < halfStar; i++) {
      starComponents.push(
          <Image
              key={`half-${i}`}
              source={icons.starHalf}
              resizeMode="cover"
              style={{
                  width: 20,
                  height: 20,
              }}
          />
      )
  }

  // No Star
  for (var i = 0; i < noStar; i++) {
      starComponents.push(
          <Image
              key={`empty-${i}`}
              source={icons.starEmpty}
              resizeMode="cover"
              style={{
                  width: 20,
                  height: 20,
              }}
          />
      )
  }

  return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {starComponents}
      </View>
  )
}

const Avatars = () => {
  const avatars = [ icons.jason, icons.jyoti, icons.antony, icons.suzanne, icons.eric, icons.chris ];
  return (
    <View>
      <Text>Community Approved</Text>
      <View style={{ flexDirection: 'row' }}>
        {avatars.map((item, index) => (
            <Image
              key={index}
              source={item}
              style={{
                zIndex: 5 - index,
                marginLeft: index === 0 ? 0 : -20,
                borderRadius: 30,
                width: 50,
                height: 50,
                overflow: "hidden",
                borderWidth: 3,
                borderColor: 'white'
              }} />
          ))}
        <Text>+</Text>
        <Text style = {{fontWeight: 'bold'}}>12099</Text>
        <Text> others</Text>
      </View>
    </View>
  )
}

const IconLabel = ({ icon, label }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={icon}
                resizeMode="cover"
                style={{
                    width: 50,
                    height: 50,
                }}
            />
            <Text style={{ marginTop: SIZES.padding, color: COLORS.black }}>{label}</Text>
        </View>
    )
}

function Detail_2({ route, navigation }) {
  const { item } = route.params ;

  const renderHeader = () => (
    <View style={{ paddingHorizontal: 20 }}>
    <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
        <Text numberOfLines={1} adjustsFontSizeToFit={true} selectable={true} style={{ fontWeight: 'bold', fontSize: 35 }}>{item.title}</Text>
        <StarReview rate={2.8} />
    </View>
    <Avatars />
    </View>
  ) ;
  const renderContent = () => (
    <View
    style={{
      backgroundColor: 'white',
      height: 900,
    }}
    >
        <View style={{ paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
                <Text numberOfLines={1} adjustsFontSizeToFit={true} selectable={true} style={{ fontWeight: 'bold', fontSize: 35 }}>{item.title}</Text>
                <StarReview rate={2.8} />
            </View>
            <Avatars />
            <View style={styles.container}>
                <View style={{ marginTop: 25 }}>
                    <Map latitude={item.location.latitude} longitude={item.location.longitude}/>
                        <View style={{ flexDirection: 'row', marginTop: SIZES.base, paddingHorizontal: SIZES.padding * 2, justifyContent: 'space-between' }}>
                            <IconLabel
                                icon={icons.swimming}
                                label="Swimming" />

                            <IconLabel
                                icon={icons.tram}
                                label="Tram" />

                            <IconLabel
                                icon={icons.dollar}
                                label="Free" />
                        </View>
                        <View style={{ marginTop: SIZES.padding, }}>
                            <Text style={{fontWeight: 'bold'}}>About</Text>
                            <Text style={{ marginTop: SIZES.radius, color: COLORS.black }}>
                                {item.summary}
                            </Text>
                        </View>
                        <View style={{ marginTop: SIZES.padding, }}>
                            <Text style={{fontWeight: 'bold'}}>Main Attractions</Text>
                            <Text style={{ marginTop: SIZES.radius, color: COLORS.black }}>
                                {item.mainAttractions}
                            </Text>
                        </View>
                        <View style={{ marginTop: SIZES.padding, }}>
                            <Text style={{fontWeight: 'bold'}}>Cost</Text>
                            <Text style={{ marginTop: SIZES.radius, color: COLORS.black }}>
                                {item.cost}
                            </Text>
                        </View>
                        <View style={{ marginTop: SIZES.padding}}>
                            <Text style={{fontWeight: 'bold'}}>Travel</Text>
                        </View>
                    </View>
            </View>
        </View>
    </View>
  );

  const sheetRef = useRef(0);

  return (
    <SafeAreaView style={[styles.detailMain, { flex: 1, backgroundColor: 'white' }]}>
      <MaterialCommunityIcons
          name="arrow-left-circle"
          color={'white'}
          size={30}
          style={{
            padding: 12,
            position: 'absolute',
            top: 40,
            left: 10,
            zIndex: 2,
          }}
          onPress={() => navigation.goBack()} />
      <View
        style={[
          StyleSheet.absoluteFillObject,
          { backgroundColor: 'rgba(0,0,0,0.3)' },
        ]}
      >
            <SliderBox
              images={item.images}
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
              }} />
        <LinearGradient
          colors={['transparent', 'white', 'white']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: SIZES.height / 2.3
          }} />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[600, 600, 120]}
        initialSnap={2}
        borderRadius={20}
        renderContent={renderContent}
        enabledContentTapInteraction={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
    },
    detailMain: {
        paddingTop: 30,
        elevation: 0,
        flex: 1,
        backgroundColor: 'white',
    }
  });

export default Detail_2 ;