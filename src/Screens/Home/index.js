import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from "react-native";
import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
} from "react";
import Geocoder from "react-native-geocoding";
import MapView, { Polygon } from "react-native-maps";
import Modal from "react-native-modal";
import { Marker } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import { styles } from "./index.style";
import Cross from 'react-native-vector-icons/Entypo'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import CustomText from "../../Components/Text";
import CustomButton from "../../Components/Button";
import { useSelector } from "react-redux";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import axios from "axios";

import MenuModal from "../../Components/Modal/MenuModal";
import MapViewDirections from "react-native-maps-directions";
import Toast from "react-native-toast-message";
import BasUrl from "../../BasUrl";
const Home = ({ navigation, route }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [region, setRegion] = useState();
  const [nearRegion, setNearRegion] = useState()
  const [searchRegion, setSearchRegion] = useState();
  const [isMapMoving, setIsMapMoving] = useState(true);
  const mapRef = useRef(null);
  const [isSelectDistinationVisible, setSelectDistinationVisible] = useState(
    false
  );
  const [imageLoading, setImageLoading] = useState(false)
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [ads, setAds] = useState([]);
  const userId = useSelector(state => state.authData.user._id)
  const [bussinessId, setBussinessId] = useState()
  const [myLocation, setMyLocation] = useState(region);
  const [currentRegion, setCurrentRegion] = useState();

  const [isLoading, setIsLoading] = useState(false)
  const [currentLocation, setCurrentLocation] = useState([]);
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["12%", "45%"], []);
  const [showLocation, setShowLocation] = useState(false)
  Geocoder.init("AIzaSyCxPKJMEW5ko5BoDLW5F3K4bzs-faQaHU8");
  const [selectedAd, setSelectedAd] = useState(null); // State to track selected ad
  // Function to show modal and set selected ad
  const [nearLocation, setNearLocation] = useState([])
console.log('selectedAd',selectedAd)
  const [dropOffLocation, setDropOffLocation] = useState({
    latitude: '',
    longitude: ''
  })
  useEffect(() => {
    Geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      setCurrentRegion({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      })
      setRegion({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      });
    });
  }, []);

  const handleRegionChangeComplete = (region) => {
    console.log('Current Location - Latitude:', region.latitude, 'Longitude:', region.longitude);
    // console.log('map moving', isMapMoving)
    if (isMapMoving) {
      const lat = region.latitude
      const lng = region.longitude
      setRegion((oldRegion) => ({
        ...oldRegion,
        latitude: lat,
        longitude: lng,
      }))
    }
    setIsMapMoving(true)
  };

  const showAdModal = (adId) => {

    console.log("adId", adId)

    setIsLoading(true)
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://www.yourappdemo.com/johnradar/api/user/AllAds/${adId}`,
      headers: {
        'Accept': 'application/json'
      }
    };

    axios.request(config)
      .then((response) => {
        console.log('response',response.data)
        setSelectedAd(response.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data)
      });
  };


  const hideModal = () => {
    setSelectedAd(null);
  };


  // const opengallery,handleregisterlocation,handleSelectLocationStart

  const showToast = (type, msg) => {
    Toast.show({
      type: type,
      text1: msg,
    });
  };

  const handleEndLocationSelect = (data, details) => {
    const coordinate = {
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
    };
    setEndLocation({ name: data.description, coordinate });
  };
  const animateToRegion = (coordinate) => {
    mapRef.current.animateToRegion(
      {
        ...coordinate,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      },
      1000
    );
  };

  //getAllAds


  //getAllLocation


  const getAllLocations = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${BasUrl}allLocation`,
      headers: {
        'Accept': 'application/json'
      }
    };

    axios.request(config)
      .then((response) => {
        setCurrentLocation(response.data.data)
        setBussinessId(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getAllLocations()
  }, [])



  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getAllLocations()
    });

    return unsubscribe;
  }, [navigation]);

  //watchPosition code


  //handleMapPress

  const fitToPath = () => {
    if (mapRef && dropOffLocation && dropOffLocation.latitude && dropOffLocation.longitude) {
      mapRef.current.fitToCoordinates(
        [
          region,
          {
            latitude: dropOffLocation?.latitude,
            longitude: dropOffLocation?.longitude,
          },
        ],
        {
          edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
          animated: true,
        },
      );
    }
  };

  const getNearByLocations = async (id, type) => {
    setIsLoading(true)

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCxPKJMEW5ko5BoDLW5F3K4bzs-faQaHU8&location=${nearRegion?.latitude},${nearRegion?.longitude}&radius=500&type=${type}`,
      headers: {}
    };
    axios.request(config)
      .then((response) => {
        setIsLoading(false)
        setShowLocation(true)
        // setRegion({
        //   ...region,
        //   longitudeDelta: 0.01,
        //   latitudeDelta: 0.01
        // })
        setNearLocation(response?.data?.results)

        if (!response?.data?.results.length) {
          showToast('info', `No ${type} nearby`)

        }
      })
      .catch((error) => {
        setIsLoading(false)

        console.log(error);
      });

  }
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleDistinationModal = () => {
    setSelectDistinationVisible(!isSelectDistinationVisible);
  };
  const nearByData = [
    {
      id: 1,
      name: "Icon 1",
      iconName: "local-restaurant",
      title: "Restaurants",
      type: 'restaurant'
    },
    {
      id: 2,
      name: "Icon 2",
      iconName: "local-cafe",
      title: "Cafe",
      type: 'cafe'
    },
    {
      id: 3,
      name: "Icon 2",
      iconName: "local-hospital",
      title: "Hospital",
      type: 'hospital'
    },
    {
      id: 4,
      name: "Icon 2",
      iconName: "local-pharmacy",
      title: "Pharmacy",
      type: 'pharmacy'
    },
    {
      id: 5,
      name: "Icon 2",
      iconName: "sports-gymnastics",
      title: "Gym",
      type: 'gym'
    },
    {
      id: 6,
      name: "Icon 2",
      iconName: "park",
      title: "Park",
      type: 'park'
    },
    {
      id: 7,
      name: "Icon 2",
      iconName: "museum",
      title: "Museum",
      type: 'museum'
    },
    {
      id: 8,
      name: "Icon 2",
      iconName: "shopping-cart",
      title: "Shopping Mall",
      type: 'shopping_mall'
    },
    {
      id: 9,
      name: "Icon 2",
      iconName: "local-airport",
      title: "Airport",
      type: 'airport'
    },
    {
      id: 10,
      name: "Icon 2",
      iconName: "directions-bus",
      title: "Bus Station",
      type: 'bus_station'
    },
    {
      id: 11,
      name: "Icon 2",
      iconName: "train",
      title: "Train Station",
      type: 'train_station'
    },
    {
      id: 12,
      name: "Icon 2",
      iconName: "shopping-bag",
      title: "Bank",
      type: 'bank'
    },
    {
      id: 13,
      name: "Icon 2",
      iconName: "local-post-office",
      title: "Post Office",
      type: 'post_office'
    },
    {
      id: 14,
      name: "Icon 2",
      iconName: "school",
      title: "School",
      type: 'school'
    },
  ];

  return (
    <View style={{ flex: 1 }}>

      <View style={styles.menuBtn}>
        <TouchableOpacity
          style={{ position: "absolute" }}
          // onPress={() => navigation.navigate('RegisterLocation')}
          onPress={() => navigation.openDrawer()}
        >
          <Entypo name={"menu"} size={30} color={"#fff"} style={{}} />
        </TouchableOpacity>

      </View>

      {isLoading &&
        (
          <View style={{ position: 'absolute', height: '100%', zIndex: 1000, alignSelf: 'center', justifyContent: 'center', }}>
            <ActivityIndicator size="large" color="brown" />
          </View>
        )
      }

      <MapView
        ref={mapRef}
        // showsMyLocationButton={true}
        // followsUserLocation={true}
        scrollEnabled={true}
        // zoomEnabled={true}
        // pitchEnabled={true}
        // rotateEnabled={true}
        // userLocationAnnotationTitle="My Locations"
        region={region}
        // onRegionChangeComplete={handleRegionChangeComplete}
        onRegionChangeComplete={region => {
          // console.log('region', region)
          setNearRegion(region);
          // setBussinessId('abc')
        }}
        // onRegionChangeComplete={()=>handleRegionChangeComplete}
        // onRegionChangeComplete={(resp) => setRegion(resp)}
        style={styles.map}
      // initialRegion={region}
      >
        {dropOffLocation.latitude && dropOffLocation.longitude &&
          (
            <MapViewDirections
              origin={{
                latitude: Number(currentRegion?.latitude),
                longitude: Number(currentRegion?.longitude)
              }}
              destination={{
                latitude: Number(dropOffLocation?.latitude),
                longitude: Number(dropOffLocation?.longitude),
              }}
              onReady={fitToPath}
              apikey={'AIzaSyCxPKJMEW5ko5BoDLW5F3K4bzs-faQaHU8'}
              strokeWidth={6}
              strokeColor={'red'}
            />
          )

        }


        {/* //not in need code */}

        {showLocation && (
          //  setShowLocation(false),
          nearLocation?.map((area, index) => {
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: area?.geometry?.location?.lat,
                  longitude: area?.geometry?.location?.lng,
                }}
                icon={{ uri: area?.icon }}
                title={area?.name}
              // onPress={() => showAdModal(area._id)} // Show modal instead of title
              />
            )

          })


        )}


        {currentLocation.length > 0 &&
          currentLocation.map((area, index) => {
            // console.log("area,,,", area)
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: parseFloat(area?.Latitude),
                  longitude: parseFloat(area?.Longtitude),
                }}
                onPress={() => showAdModal(area._id)} // Show modal instead of title
              />
            );
          })}

      </MapView>

      <Modal
        visible={selectedAd !== null}
        animationType="slide"
        style={{ borderRadius: 10 }}
        transparent={true}
        onBackdropPress={hideModal}
        onRequestClose={hideModal}
      >

        <View style={{
          maxHeight: 530, borderRadius: 30, shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.30,
          shadowRadius: 4.65,

          elevation: 12, backgroundColor: 'white'
        }}>
          <TouchableOpacity style={{ alignSelf: 'flex-end', right: 10, padding: 5, top: 0 }} onPress={hideModal}>
            <Cross name='cross' size={25} color={'black'} />
          </TouchableOpacity>
          {
            console.log("data", selectedAd?.data)
          }
          <ScrollView contentContainerStyle={{
            paddingBottom: 40, flexGrow: 1, borderRadius: 15
          }} showsVerticalScrollIndicator={false}>
            {selectedAd?.data?.length > 0 ? (
              selectedAd?.data?.map((ad, adIndex) => (

                <View key={adIndex} style={{ flex: 1, borderRadius: 15, marginTop: 25 }}>

                  <View style={{ marginHorizontal: 20, alignSelf: 'center', borderRadius: 15 }}>


                    <Text style={{ color: 'rgb(10,10,0)', fontSize: 24, fontWeight: '600' }}>
                      {ad.AdDescription}
                    </Text>

                    {
                      console.log(ad.images[0])
                    }

                    {/* {ad?.images && ( */}
                      <Image style={{ height: 250, width: 250, borderRadius: 15, marginTop: 10,  }} source={{ uri: `https://www.yourappdemo.com/johnradar/${ad.images[0]}`}} />

                    {/* // )} */}
                  </View>
                </View>
              ))
            )
              : (
                <View style={{
                  height: 80, justifyContent: 'center', alignItems: 'center', shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.30,
                  shadowRadius: 4.65,

                  elevation: 12,
                }}>

                  <Text style={{ textAlign: 'center', position: 'absolute', color: 'rgb(10,10,0)', fontSize: 22, fontWeight: '600' }}>
                    No ads registered at this location.
                  </Text>
                </View>
              )

            }

          </ScrollView>
        </View>
      </Modal>

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        backgroundStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      // onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons
              name={"location-pin"}
              size={25}
              color={"#fff"}
              style={{ marginTop: 10 }}
            />

            <GooglePlacesAutocomplete
              placeholder="Search here..."
              onPress={(data, details = null) => {
                let chosenRegion = {
                  longitude: details.geometry.location.lng,
                  latitude: details.geometry.location.lat,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,
                };
                mapRef.current.animateToRegion(chosenRegion, 1000);
              }}
              textInputProps={{
                placeholderTextColor: "#fff",
              }}
              fetchDetails={true}
              query={{
                key: "AIzaSyCxPKJMEW5ko5BoDLW5F3K4bzs-faQaHU8",
                language: "en",
              }}
              autoFillOnNotFound={true}
              styles={{
                container: {
                  // borderColor: "black",
                  // backgroundColor:'red'
                },
                textInputContainer: {
                  // backgroundColor: "#73737E",
                },
                textInput: {
                  height: 48,
                  fontSize: 16,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                },
                predefinedPlacesDescription: {},
              }}
            />

            <MaterialIcons
              name={"search"}
              size={25}
              color={"#fff"}
              style={{ marginTop: 10 }}
            />
          </View>
          <CustomButton
            buttonText={"select your pick and drop"}
            style={styles.selectYourPickAndDrop}
            onPress={() => toggleDistinationModal()}
          />
          <BottomSheetFlatList
            showsHorizontalScrollIndicator={true}
            horizontal={true}
            data={nearByData}
            renderItem={({ item }) => {
              return (
                <View style={styles.flatlist_container}>
                  <TouchableOpacity onPress={() => getNearByLocations(item.id, item.type)} style={styles.nearByData_View}>
                    <MaterialIcons
                      name={item.iconName}
                      size={18}
                      color="white"
                    />
                    <CustomText
                      text={item.title}
                      style={{ marginHorizontal: 6, fontSize: 16 }}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </BottomSheet>
      {/* menu modal */}
      <Modal
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        isVisible={isModalVisible}
        style={styles.modal_Main_container}
      >
        <MenuModal
          navigation={navigation}
          toggleModal={toggleModal}
        />
      </Modal>

      {/* Select package.. */}

      {/* Make Your Payment.. */}

      <Modal
        // animationIn="bounceInUp"
        // animationOut="bounceInDown"
        onBackdropPress={toggleDistinationModal}

        isVisible={isSelectDistinationVisible}
        style={styles.modal_Main_container}
      >
        <View
          style={{
            backgroundColor: "rgba(220, 220, 204, 10)",
            flex: 0.7,
            width: "100%",
            borderColor: "#1EF1F5",
            borderWidth: 1.2,
            marginTop: 20,
          }}
        >
          {/* //not in need code 2 */}

          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <GooglePlacesAutocomplete
              placeholder="Select Your Drop Off Location"

              onPress={(data, details = null) => {
                let chosenRegion = {
                  longitude: details.geometry.location.lng,
                  latitude: details.geometry.location.lat,
                  latitudeDelta: 0.00005,
                  longitudeDelta: 0.00005,
                };
                setDropOffLocation({
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng,
                  latitudeDelta: 0.00005,
                  longitudeDelta: 0.00005,
                })
                setSearchRegion(chosenRegion);

                handleEndLocationSelect(data, details);
                toggleDistinationModal();
                animateToRegion(details.geometry.location);
                setIsMapMoving(false);
                // setRegion(chosenRegion);
                // setEndLocation(data);
                // mapRef.current.animateToRegion(chosenRegion, 1000);
              }}
              fetchDetails={true}
              query={{
                key: "AIzaSyCxPKJMEW5ko5BoDLW5F3K4bzs-faQaHU8",
                language: "en",
              }}
              textInputProps={{
                placeholderTextColor: "#fff",
              }}
              autoFillOnNotFound={true}
              styles={{
                container: {},
                textInputContainer: {
                  width: "90%",
                  alignSelf: "center",
                  height: 50,
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 10,
                  marginTop: 15,
                },
                textInput: {
                  height: 48,
                  fontSize: 16,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                },
                predefinedPlacesDescription: {
                  backgroundColor: "red",
                },
              }}

            />
          </View>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <CustomButton
              buttonText={"Close"}
              style={styles.selectYourPickAndDrop}
              onPress={() => {
                // Assuming dropOffLocation is already defined as a state variable
                toggleDistinationModal();
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;
