// imports
// import mapImage from '../../Assests/Images/car.png'
// import Toast from "react-native-toast-message";
// import ImagePicker from 'react-native-image-crop-picker';
// import Ionicons from "react-native-vector-icons/Ionicons";
// import Fontisto from "react-native-vector-icons/Fontisto";
// import images from "../../Constants/images";
// import { RadioButton } from "react-native-paper";
// import { COLORS } from "../../Constants/theme";
// import Lottie from "lottie-react-native";
// import InputField from "../../Components/InputFiled";
// import { logOut } from "../../Redux/authSlice";
// import MapViewDirections from "react-native-maps-directions";
// import RegisterLocation from "../ModalScreens/registerLocation";
// import {
//     widthPercentageToDP as wp,
//     heightPercentageToDP as hp,
//   } from "react-native-responsive-screen";


//handleMapPress


// not in need code

{/* {myLocation ? (
          <Marker title="My Location " coordinate={myLocation}>
            <View style={{ width: 50, height: 80 }}>
              <Image
                source={images.carMarker} // Your marker image source
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: "contain",
                }}
              />
            </View>
          </Marker>
        ) : null}
        {startLocation ? (
          <Marker
            title="Selected Location"
            coordinate={startLocation?.coordinate}
          >
            <View style={{ width: 50, height: 50 }}>
              <Image
                source={images.markerImage} // Your marker image source
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: "contain",
                }}
              />
            </View>
          </Marker>
        ) : null}
        {endLocation ? (
          <Marker title="End Location" coordinate={endLocation?.coordinate} />
        ) : null}
        {startLocation && endLocation ? (
          <MapViewDirections
            origin={startLocation?.coordinate}
            destination={endLocation?.coordinate}
            apikey={"AIzaSyCxPKJMEW5ko5BoDLW5F3K4bzs-faQaHU8"}
            strokeWidth={6}
            strokeColor="green"
            onReady={handleDirectionsReady}
          //  zIndex={0}
          />
        ) : null} */}
{/* {ads.map(ad => {
          console.log('title', ad.AdTitle); // Logging within the curly braces
          return (
            <Marker
              key={ad._id}
              coordinate={{
                latitude: parseFloat(24.87763166666667),
                longitude: parseFloat(67.07896833333332),
              }}
              title={ad.AdTitle}
              description={ad.AdDescription}
            >
              <Image
                source={mapImage} // Replace with your image URL
                style={{ width: 40, height: 40 }} // Set the width and height of the image
              />
            </Marker>
          );
        })} */}




//watch position useEffect
// not in need code 2
{/* <View
            style={{
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <GooglePlacesAutocomplete
              placeholder="PickUp Location here..."
              onPress={(data, details = null) => {
                handleStartLocationSelect(data, details);
                animateToRegion(details.geometry.location);
                // setStartLocation(data);
                // setRegion(chosenRegion);
                // mapRef.current.animateToRegion(chosenRegion, 1000);
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
                  width: "90%",
                  alignSelf: "center",
                  height: 50,
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 10,
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
          </View> */}



// useEffect(() => {
//   // Request location permission
//   Geolocation.requestAuthorization();

//   // Set up location tracking (update every 1000 milliseconds or 1 second)
//   Geolocation.watchPosition(
//     (position) => {
//       const { latitude, longitude } = position?.coords;
//       setMyLocation({
//         latitude,
//         longitude,
//         latitudeDelta: 0.005,
//         longitudeDelta: 0.005,
//       });
//     },
//     (error) => console.log(error),
//     {
//       enableHighAccuracy: true,
//       timeout: 20000,
//       maximumAge: 1000,
//       distanceFilter: 10,
//     }
//   );

//   // Clean up the location tracking when the component is unmounted
//   // return () => {
//   //   Geolocation.clearWatch(locationWatchId);
//   // };
// }, []);

// console.log("my location ?????????????????", myLocation);







// const handleMapPress = (event) => {
//     const { coordinate } = event.nativeEvent;
//     // Check if startLocation is already set, if not, set it
//     if (!startLocation) {
//       setStartLocation({ coordinate });
//     } else {
//       // If startLocation is set, set endLocation
//       setEndLocation({ coordinate });
//     }
//   };


// states funcs
// const [adData, setAdData] = useState()
// const [imagePath, setImagePath] = useState()
// const FormData = require('form-data');

// const [checked, setChecked] = useState();
// 

// const [myLocation, setMyLocation] = useState(region);
// const makeModalVisible = route.params?.makeModalVisible
// const [isregisterModalVisible, setRegisterModalVisible] = useState(false);
// const [isplaceYourAddModal, setPlaceYourAddModal] = useState(false);
// const [isSelectPackageModal, setSelectPackageModal] = useState(false);
// const [isPaymentModalVisible, setPaymentModalVisible] = useState(false);
// const [isThanksModalVisible, setThanksModalVisible] = useState(false);
// const [isConfirmModalVisible, setConfirmModalVisible] = useState(false);
// const [isSettingsModalVisible, setSettingsModalVisible] = useState(false);

//getallads
// useEffect(() => {
//   let config = {
//     method: 'get',
//     maxBodyLength: Infinity,
//     url: 'https://appsdemo.pro/johnradar/api/user/AllAds',
//     headers: {
//       'Accept': 'application/json'
//     }
//   };

//   axios.request(config)
//     .then((response) => {
//       console.log("allAds",JSON.stringify(response.data));
//       setAds(response.data.Ads)
//     })
//     .catch((error) => {
//       console.log("allAdss",error);
//     });
// }, [])
// console.log('myadssss', ads)



// const opengallery,handleregisterlocation,handleSelectLocationStart


// const openGallery = () => {
//   ImagePicker.openPicker({
//     width: 300,
//     height: 400,
//     cropping: true
//   }).then(image => {
//     setImagePath(image)
//     console.log("ImagePath", imagePath)
//   });
// }


// const handleRegisterLocation = async () => {
//   try {
//     const response = await Geocoder.from(form.BusinessLocation);
//     const { lat, lng } = response.results[0].geometry.location;
//     console.log('Latitude:', lat);
//     console.log('Longitude:', lng);
//     // Update form state with latitude and longitude
//     setForm(prevForm => ({
//       ...prevForm,
//       latitude: lat,
//       longitude: lng
//     }));
//   } catch (error) {
//     console.error('Error geocoding address:', error);
//   }
// };

// Call the geocode function when form.BusinessLocation changes

// const handleStartLocationSelect = (data, details) => {
//   // Handle start location selection from autocomplete
//   const coordinate = {
//     latitude: details.geometry.location.lat,
//     longitude: details.geometry.location.lng,
//   };

//   setStartLocation({ name: data.description, coordinate });
// };





// const toggleRegisterModal = () => {
//     setRegisterModalVisible(!isregisterModalVisible);
//     toggleModal();
//   };


// const onChangeText = (changedText, key) => {
//     setForm(oldForm => {
//       return { ...oldForm, [key]: changedText };
//     });
//   };

//   const handleDirectionsReady = (result) => {
//     result?.coordinates;
//   };

// const [form, setForm] = useState({
//     BusinessLocation: '',
//     BusinessName: '',
//     PhoneNumber: '',
//     myEmail: ''
//   })

//   const [ad, setAd] = useState({
//     BusinessCategory: '',
//     AdTitle: '',
//     AdDescription: '',

//   })
//   const togglePlaceYourAdd = () => {
//     setPlaceYourAddModal(!isplaceYourAddModal);
//     toggleModal();
//     setRegisterModalVisible(false);
//   };
//   const toggleSelectPackage = () => {
//     setSelectPackageModal(!isSelectPackageModal);
//     setModalVisible(false);
//     setPlaceYourAddModal(false);
//     setRegisterModalVisible(false);
//     setPlaceYourAddModal(false);
//   };
//   const toggleMakePayment = () => {
//     setPaymentModalVisible(!isPaymentModalVisible);
//     setModalVisible(false);
//     setPlaceYourAddModal(false);
//     setRegisterModalVisible(false);
//     setSelectPackageModal(false);
//   };
//   const toggleThankYou = () => {
//     setThanksModalVisible(!isThanksModalVisible);
//     setModalVisible(false);
//     setPlaceYourAddModal(false);
//     setRegisterModalVisible(false);
//     setSelectPackageModal(false);
//     setPaymentModalVisible(false);
//   };
//   const toggleConfirm = () => {
//     setConfirmModalVisible(!isConfirmModalVisible);
//     setModalVisible(false);
//     setPlaceYourAddModal(false);
//     setRegisterModalVisible(false);
//     setSelectPackageModal(false);
//     setPaymentModalVisible(false);
//     setThanksModalVisible(false);
//   };
//   const toggleModalSettings = () => {
//     setSettingsModalVisible(!isSettingsModalVisible);
//     setModalVisible(false);
//   };



// payment
{/* <Modal
animationIn="slideInLeft"
animationOut="slideOutRight"
isVisible={isPaymentModalVisible}
style={{
  width: "100%",
  margin: 0,
}}
>
<View style={styles.modal_container}>
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <CustomText
      text={"Make Your Payment"}
      style={{
        marginHorizontal: 20,
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 18,
      }}
    />
    <TouchableOpacity
      style={styles.closebtn}
      onPress={() => {
        toggleMakePayment();
      }}
    >
      <Ionicons name={"close"} size={30} color={"#fff"} style={{}} />
    </TouchableOpacity>
  </View>
  <View style={styles.cardView}>
    <View
      style={{
        flexDirection: "row",
        marginTop: 15,
        justifyContent: "space-around",
      }}
    >
      <CustomText
        text={"Current credit card"}
        style={{ fontSize: 12 }}
      />
      <CustomText
        text={"Add new credit card"}
        style={{ fontSize: 12 }}
      />
    </View>
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between",
        marginTop: 10,
      }}
    >
      <View
        style={{
          height: 90,
          width: wp("33%"),
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 10,
          padding: 10,
        }}
      >

        <Fontisto name={"visa"} size={20} color={"#fff"} style={{}} />

        <Text
          style={{
            fontSize: hp("1.6%"),
            color: "white",
            marginTop: 12,
          }}
        >
          •••• •••• •••• 3294
        </Text>

        <Text style={{ fontSize: hp("1.3%"), color: "white" }}>
          Howard Pinsky
        </Text>
      </View>
      <TouchableOpacity>
        <View
          style={{
            height: 90,
            width: wp("33%"),
            borderWidth: 1,
            borderColor: "white",
            borderRadius: 10,
            padding: 10,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: "#611885",
              borderRadius: 200,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white" }}>
              +
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
    <View style={{ marginHorizontal: 10 }}>
      <Text
        style={{ color: "white", fontSize: hp("1.3%"), marginTop: 15 }}
      >
        Name of card holder
      </Text>

      <TextInput
        placeholder="Howard Pinsky"
        style={{
          borderWidth: 2,
          borderColor: "white",
          borderRadius: 20,
          color: "white",
          paddingHorizontal: 20,
          marginTop: 10,
          backgroundColor: "#A2A2A2",
          opacity: 0.8,
        }}
        placeholderTextColor={"white"}
      />

      <Text
        style={{ color: "white", fontSize: hp("1.3%"), marginTop: 15 }}
      >
        Credit card number
      </Text>
      <TextInput
        placeholder="1234   3924   2394   3294"
        style={{
          borderWidth: 2,
          borderColor: "white",
          borderRadius: 20,
          color: "white",
          paddingHorizontal: 20,
          marginTop: 10,
          backgroundColor: "#376CE3",
        }}
        placeholderTextColor={"white"}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ color: "white", marginTop: 10, fontSize: 12 }}>
            Expiration
          </Text>
          <TextInput
            placeholder="02/25"
            placeholderTextColor={"white"}
            style={{
              borderWidth: 1,
              borderColor: "#A2A2A2",
              borderRadius: 10,
              width: wp("35%"),
              height: 40,
              paddingHorizontal: 10,
              marginTop: 10,
              color: "white",
            }}
          />
        </View>

        <View>
          <Text style={{ color: "white", marginTop: 10, fontSize: 12 }}>
            CVV
          </Text>
          <TextInput
            placeholder="231"
            placeholderTextColor={"white"}
            style={{
              borderWidth: 1,
              borderColor: "#A2A2A2",
              // borderRadius: 10,
              width: wp("35%"),
              height: 40,
              paddingHorizontal: 10,
              marginTop: 10,
              color: "white",
            }}
          />
        </View>
      </View>
    </View>
    <CustomButton
      style={{ top: 20 }}
      buttonText={"Make Payment"}
      onPress={() => toggleConfirm()}
    />
  </View>
</View>
</Modal> */}


// select package
{/* <Modal
animationIn="slideInLeft"
animationOut="slideOutRight"
isVisible={isSelectPackageModal}
style={styles.modal_Main_container}
>
<View style={styles.modal_container}>
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <CustomText
      text={"Select Package"}
      style={{
        marginHorizontal: 20,
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 18,
      }}
    />
    <TouchableOpacity
      style={styles.closebtn}
      onPress={() => {
        toggleSelectPackage();
      }}
    >
      <Ionicons name={"close"} size={30} color={"#fff"} style={{}} />
    </TouchableOpacity>
  </View>
  <View
    style={{
      backgroundColor: "#1EF1F5",
      height: 1.5,
      marginTop: 20,
    }}
  ></View>
  <View style={{ marginHorizontal: 25, marginTop: 15 }}>
    <TouchableOpacity
      onPress={() => setChecked("first")}
      style={[
        styles.checkingView,
        checked === "first"
          ? { borderColor: COLORS.primary, borderWidth: 1.5 }
          : null,
      ]}
    >
      <RadioButton
        value="first"
        color={COLORS.primary}
        uncheckedColor="#fff"
        status={checked === "first" ? "checked" : "unchecked"}
        style={styles.radiobtn}
        onPress={() => setChecked("first")}
      />
      <View style={{ marginHorizontal: 15 }}>
        <CustomText
          text={"$119.99/Yearly"}
          style={{ fontSize: 18, fontWeight: "bold" }}
        />
        <CustomText text={"$9.99/Month billed annually "} />
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => setChecked("second")}
      style={[
        styles.checkingView,
        checked === "second"
          ? { borderColor: COLORS.primary, borderWidth: 1.5 }
          : null,
      ]}
    >
      <RadioButton
        value="second"
        color={COLORS.primary}
        uncheckedColor="#fff"
        status={checked === "second" ? "checked" : "unchecked"}
        style={styles.radiobtn}
        onPress={() => setChecked("second")}
      />
      <View style={{ marginHorizontal: 15 }}>
        <CustomText
          text={"$50.99/Monthly"}
          style={{ fontSize: 18, fontWeight: "bold" }}
        />
        <CustomText text={"$50.99/ billed for 1 month"} />
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => setChecked("third")}
      style={[
        styles.checkingView,
        checked === "third"
          ? { borderColor: COLORS.primary, borderWidth: 1.5 }
          : null,
      ]}
    >
      <RadioButton
        value="third"
        color={COLORS.primary}
        uncheckedColor="#fff"
        status={checked === "third" ? "checked" : "unchecked"}
        style={styles.radiobtn}
        onPress={() => setChecked("third")}
      />
      <View style={{ marginHorizontal: 15 }}>
        <CustomText
          text={"$15.99/weekly"}
          style={{ fontSize: 18, fontWeight: "bold" }}
        />
        <CustomText text={"$15.99/ billed for 1 week"} />
      </View>
    </TouchableOpacity>
    <CustomButton
      buttonText={"Continue"}
      onPress={() => toggleMakePayment()}
    />
  </View>
</View>
</Modal> */}