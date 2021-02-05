
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SliderBox } from "react-native-image-slider-box";
import { images, icons, COLORS, SIZES } from '../constants';
import Map from '../components/Map';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StarReview = ({ rate }) => {
    var starComponents = [];
    var fullStar = Math.floor(rate)
    var noStar = Math.floor(5 - rate)
    var halfStar = 5 - fullStar - noStar

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
            <Text style={{ marginLeft: SIZES.base, color: COLORS.gray }}>{rate}</Text>
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

export const DestinationDetail = ({ route, navigation }) => {
    // Render
    const { item } = route.params ;
    return (
        <View style={styles.container}>

            <View style={{ flex: 2 }}>
                <SliderBox
                    images={item.images}
                    // resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '100%',
                    }} 
                />
                {/* <View
                    style={[{
                        position: 'absolute',
                        bottom: "5%",
                        left: "5%",
                        right: "5%",
                        borderRadius: 15,
                        padding: SIZES.padding,
                        backgroundColor: COLORS.white
                    }, styles.shadow]}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.shadow}>
                            <Image
                                source={images.glenelg_1}
                                resizeMode="cover"
                                style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 15,
                                }} />
                        </View>

                        <View style={{ marginHorizontal: SIZES.radius, justifyContent: 'space-around' }}>
                            <Text>{route.params.item.title}</Text>
                            <Text style={{ color: 'black'}}>{route.params.item.key}</Text>

                            <StarReview
                                rate={4.5} />
                        </View>
                    </View>

                    <View style={{ marginTop: SIZES.radius }}>
                        <Text style={{ color: COLORS.gray }}>
                            Enjoy the luxurious white sand and have a drink right on the beach!
                        </Text>
                    </View>
                </View> */}

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
                    style={{
                        position: 'absolute',
                        top: 50,
                        left: 20,
                        right: 20,
                        //height: 50,
                        flexDirection: 'row',
                    }}
                >
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <MaterialCommunityIcons
                        name="dots-vertical"
                        color={'white'}
                        size={30} />
                    </View>
                </View>
            </View>

        <View style={{ flex: 1.5, marginTop: 20 }}>
            <ScrollView
              horizontal={false}
              showsVerticalScrollIndicator={false}>
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


                <View style={{ marginTop: SIZES.padding, paddingHorizontal: SIZES.padding }}>
                    <Text style={{fontWeight: 'bold'}}>About</Text>
                    <Text style={{ marginTop: SIZES.radius, color: COLORS.black }}>
                        {item.summary}
                    </Text>
                </View>
                <View style={{ marginTop: SIZES.padding, paddingHorizontal: SIZES.padding }}>
                    <Text style={{fontWeight: 'bold'}}>Main Attractions</Text>
                    <Text style={{ marginTop: SIZES.radius, color: COLORS.black }}>
                        {item.mainAttractions}
                    </Text>
                </View>
                <View style={{ marginTop: SIZES.padding, paddingHorizontal: SIZES.padding }}>
                    <Text style={{fontWeight: 'bold'}}>Cost</Text>
                    <Text style={{ marginTop: SIZES.radius, color: COLORS.black }}>
                        {item.cost}
                    </Text>
                </View>
                <View style={{ marginTop: SIZES.padding, paddingHorizontal: SIZES.padding }}>
                    <Text style={{fontWeight: 'bold'}}>Travel</Text>
                </View>
                <Map />
            </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

export default DestinationDetail;
