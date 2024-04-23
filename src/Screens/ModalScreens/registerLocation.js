import {
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    ImageBackground,
    StyleSheet,
    ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../Home/index.style";
import CustomText from "../../Components/Text";
import Ionicons from "react-native-vector-icons/Ionicons";
import InputField from "../../Components/InputFiled";
import CustomButton from "../../Components/Button";
import axios from "axios";
import { useSelector } from "react-redux";
import MapView from 'react-native-maps';
import Toast from "react-native-toast-message";
import BasUrl from "../../BasUrl";

const RegisterLocation = ({ navigation, route, toggleRegister }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [longitude, setLongitude] = useState()
    const [latitude, setLatitude] = useState()
    const userDetails = useSelector(state => state.authData.user._id)
    const userToken = useSelector(state => state.authData.token)
    const onChangeText = (changedText, key) => {
        setForm(oldForm => {
            return { ...oldForm, [key]: changedText };
        });
    };
    useEffect(() => {
        console.log('userToken', userToken)
    }, [])
    const showToast = (type, msg) => {
        Toast.show({
            type: type,
            text1: msg,
        })
    };

    useEffect(() => {
        setLatitude(route.params?.coordinates?.latitude)
        setLongitude(route.params?.coordinates?.longitude)
        console.log("routes", route.params?.coordinates?.latitude)
    }, [route])
    const [form, setForm] = useState({
        BusinessLocation: '',
        BusinessName: '',
        PhoneNumber: '',
        myEmail: ''
    })
    console.log('user', userDetails)
    const handleRegisterLocation = () => {
        setIsLoading(true)
        // console.log('id', id)
        let data = JSON.stringify({
            "userId": `${userDetails}`,
            "BusinessLocation": form.BusinessLocation,
            "BusinessName": form.BusinessName,
            "PhoneNumber": form.PhoneNumber,
            "myEmail": form.myEmail,
            "Longtitude": longitude,
            "Latitude": latitude
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${BasUrl}RegisterYourLocation`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Basic ${userToken}`
            },
            data: data
        };
        if (form.BusinessLocation &&
            form.BusinessName &&
            form.PhoneNumber &&
            form.myEmail &&
            longitude && latitude) {
            axios.request(config)
                .then((response) => {
                    console.log("responseee...", JSON.stringify(response.data));
                    if (response.data.success == true) {
                        setIsLoading(false)

                        showToast('success', response.data.message)
                        navigation.navigate('Home')
                        // toggleModal()
                    } else {
                        setIsLoading(false)

                        showToast('error', response.data)

                    }
                })
                .catch((error) => {
                    setIsLoading(false)
                    console.log(error);
                    showToast('error', error)

                });
        } else {
            setIsLoading(false)
            return showToast('error', "Plz Fill The Required Fields")
        }
    }
    return (
        <ImageBackground style={{ flex: 1 }} source={require('../../Assests/Images/mapImage.png')}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <View style={containertyles.container}>
                    <View style={{ position: 'absolute', top: '50%', justifyContent: 'center', alignSelf: 'center' }}>

                        {isLoading ?
                            (
                                <ActivityIndicator style={{ zIndex: 10, }} color={'black'} size={'30'} />
                            ) : null
                        }
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <CustomText
                            text={"Register Your Location"}
                            style={{
                                marginHorizontal: 20,
                                fontSize: 18,
                                fontWeight: "bold",
                                marginTop: 18,
                            }}
                        />
                        <TouchableOpacity
                            style={styles.closebtn}

                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons name={"close"} size={30} color={"#fff"} style={{}} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <View
                            style={{
                                backgroundColor: "#1EF1F5",
                                height: 1.5,
                                marginTop: 20,
                            }}
                        ></View>
                        <View style={{ marginHorizontal: 25, marginTop: 15 }}>

                            <InputField placeholder={"Enter Your Business Location"} onChangeText={changedText => onChangeText(changedText, 'BusinessLocation')}
                            />
                            <InputField placeholder={"Business Name"} onChangeText={changedText => onChangeText(changedText, 'BusinessName')}
                            />
                            <InputField placeholder={"Your Phone Number"} onChangeText={changedText => onChangeText(changedText, 'PhoneNumber')}
                            />
                            <InputField placeholder={"Your Email Address"} onChangeText={changedText => onChangeText(changedText, 'myEmail')}
                            />
                            <TouchableOpacity onPress={() => navigation.navigate('ChooseLocation')} style={{ marginTop: 20, backgroundColor: '#B19CD9', height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>Select Your Business Location</Text>
                            </TouchableOpacity>

                            <CustomButton
                                buttonText={"Continue"}
                                onPress={(handleRegisterLocation)}
                            />
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

export default RegisterLocation

const containertyles = StyleSheet.create({
    container: {
        backgroundColor: "gray",
        flex: 1,
        opacity: 0.8,
        width: "100%",
        borderTopColor: "#1EF1F5",
        borderBottomColor: "#1EF1F5",
        borderWidth: 1.2,
        marginTop: 20,
    }
})