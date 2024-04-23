import { View, Image, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "./index.style";
import BackButton from "../../Components/Back Button";
import FastImage from "react-native-fast-image";
import images from "../../Constants/images";
import Toast from "react-native-toast-message";
import CustomText from "../../Components/Text";
import InputField from "../../Components/InputFiled";
import CustomButton from "../../Components/Button";
import BasUrl from "../../BasUrl";
import WaveLoader from "../../Components/WaveLoader";
import axios from "axios";

const ForgetPassword = ({ navigation, route }) => {
  const [isLoader, setIsLoader] = useState(false);
  const [value,setValue] =useState(null)
  const onChangeText = (changedText, key) => {
    setValue(oldForm => {
      return { ...oldForm, [key]: changedText };
    });
  };
  const showToast = (type, msg) => {
    Toast.show({
      type: type,
      text1: msg,
    });
  };
  const forgetUserPassword = async () => {
    setIsLoader(true);
    console.log("emailllllllll", value);
    let data = JSON.stringify({
      email: value.email,
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${BasUrl}ForgetPasswordEmail`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: data,
    };
    axios
      .request(config)
      .then((response) => {
        const res = response.data;
        setIsLoader(false);
        if (res.status === "Success") {
          navigation.navigate("Otp", {
            id: res.id,
          });
          showToast("success", res.message);

        } else {
          showToast("error", res.message);
        }
        console.log('res', res)
      })
      .catch((error) => {
        setIsLoader(false);
        showToast("error", error);
        console.log("errrrrrrrrrr", error);
      });
  };

  return (
    <FastImage source={images.AuthBackground} style={{ flex: 1 }}>
    
          <View style={styles.main_container}>
            <BackButton onPressBack={() => navigation.goBack()} />
            <View style={{ height: 80 }}></View>
            <View style={styles.container}>
              <CustomText
                text={"Enter Your Email"}
                style={styles.screen_title}
              />
              <InputField
                placeholder={"Email"}
                onChangeText={changedText => onChangeText(changedText, 'email')}
                keyboardType={"email-address"}
              />
            
              {isLoader ? (
                <WaveLoader />
              ) : (
                <CustomButton
                  buttonText={"Submit"}
                  onPress={() => {
                    forgetUserPassword();
                  }}
                />
              )}
            </View>
          </View>
      <Toast />
    </FastImage>
  );
};

export default ForgetPassword;
