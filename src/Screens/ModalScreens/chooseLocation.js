
import { Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Cross from 'react-native-vector-icons/Entypo'
import Toast from "react-native-toast-message";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Geolocation from '@react-native-community/geolocation';
import AntDesign from 'react-native-vector-icons/AntDesign'

const ChooseLocation = ({ navigation }) => {
    const [markerCoordinate, setMarkerCoordinate] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [currentRegion, setCurrentRegion] = useState(null);
    const locationRef = useRef()
    const handleMapPress = (event) => {
        const { coordinate } = event.nativeEvent;
        setMarkerCoordinate(coordinate);
        console.log('coordinates', markerCoordinate)
    };

    useEffect(() => {
        // Fetch user's current locatio
        console.log("sssssssssssssssssssssssssssssssssssssssssssssssssssss called")
        Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                });
            },
            error => console.error(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }, []);
    // useEffect(()=>{
    //     console.log('searchinput length', searchInput.length)

    // },[searchInput.length])
    // console.log('searchinput length', searchInput.length)



    return (
        <View style={{ flex: 1, }}>
            <View style={{ position: 'absolute', zIndex: 1000, backgroundColor: 'rgba(0,0,0,0)' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ height: 22, width: 30, marginHorizontal: 20, marginTop: 10, }}>
                    <AntDesign color={'black'} size={25} name='arrowleft' />
                </TouchableOpacity>
                <GooglePlacesAutocomplete

                    // renderRightButton={() => {

                    //     return (
                    //         <View style={{ position: 'absolute', zIndex: 3000, right: 10, alignSelf: 'center', paddingTop: 5 }}>
                    //             <Cross name='cross' size={22} color={'black'} />
                    //         </View>
                    //     )

                    // }}
                    enablePoweredByContainer={false}


                    styles={{
                        container: {
                            width: widthPercentageToDP('100%'),
                            alignSelf: 'center',
                            paddingHorizontal: 20,
                            borderRadius: 100,

                            //   marginTop: 20,
                            zIndex: 2,

                        },

                        listView: {
                            borderRadius: 100,
                            zIndex: 20000,

                            backgroundColor: 'red'
                        },
                        textInput: {
                            color: 'black',
                            fontSize: heightPercentageToDP('2%'),
                            borderRadius: 10,
                            paddingRight: 30,
                            // overflow:'scroll',

                            //   paddingHorizontal: 20,
                            borderWidth: 1,
                            borderColor: 'lightgrey',
                        },
                    }}

                    autoFocus={true}
                    getAddressText={(value) => {
                        console.log('Selected address:', value);
                    }}
                    GooglePlacesDetailsQuery={{ zIndex: 25 }}
                    fetchDetails={true}
                    placeholder="Search"
                    query={{
                        key: "AIzaSyCxPKJMEW5ko5BoDLW5F3K4bzs-faQaHU8",
                        language: "en",
                    }}
                    textInputProps={{ height: 50, borderRadius: 10, marginTop: 10 }}
                    onPress={(data, details = null) => {
                        console.log("data", data);
                        const location = details.geometry.location;
                        console.log("location.lat", location.lng);
                        locationRef.current.animateToRegion({
                            latitude: location.lat,
                            longitude: location.lng,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }, 1000)

                        setMarkerCoordinate({ latitude: location.lat, longitude: location.lng });
                    }}
                    onFail={(error) => console.error(error)}
                />

            </View>
            <TouchableOpacity
                onPress={() => {
                    console.log("coordinates", markerCoordinate);
                    navigation.navigate('RegisterLocation', { coordinates: markerCoordinate });
                }}
                style={{
                    position: 'absolute', zIndex: 10, bottom: 30, height: 50, width: 200, borderRadius: 10, justifyContent: 'center',
                    alignItems: 'center', alignSelf: 'center',
                    backgroundColor: '#007bff'
                }}>
                <Text style={{ color: 'white', fontSize: 16 }}>Confirm Location</Text>
            </TouchableOpacity>

            <MapView
                ref={locationRef}
                style={{ flex: 1 }}

                initialRegion={currentRegion} // Set initial region to user's current region
                onPress={handleMapPress}
            >
                {markerCoordinate && (
                    <Marker

                        coordinate={markerCoordinate}
                        title="Selected Location"
                    />
                )}
            </MapView>
        </View>
    );
};

export default ChooseLocation;
