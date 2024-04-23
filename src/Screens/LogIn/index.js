import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { styles } from "./index.style";
import FastImage from "react-native-fast-image";
import CustomText from "../../Components/Text";
import InputField from "../../Components/InputFiled";
import CustomButton from "../../Components/Button";
import images from "../../Constants/images";
import BasUrl from "../../BasUrl";
import { useDispatch } from "react-redux";
import { UserLogin } from "../../Redux/authSlice";
import axios from "axios";
import Toast from "react-native-toast-message";
import WaveLoader from "../../Components/WaveLoader";

const Login = ({ navigation }) => {
  const [isLoader, setIsLoader] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const dispatch = useDispatch();

  const onChangeText = (changedText, key) => {
    setForm(oldForm => {
      return { ...oldForm, [key]: changedText };
    });
  };
  const LogInUser = async () => {
    setIsLoader(true);

    let data = JSON.stringify({
      "email": form.email,
      "password": form.password
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${BasUrl}login`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: data
    };
    dispatch(UserLogin(config));

    axios.request(config)
      .then((response) => {
        setIsLoader(false);
        console.log("log ==>>>", JSON.stringify(response.data));
        if (response.data.status == "Success") {
          console.log('responseeee', response.data.data._id)
          showToast('success', 'Login Successful')
        } else {
          showToast('error', response.data.message)

        }
      })
      .catch((error) => {
        setIsLoader(false);
        showToast("error", error.message);
        console.log("erorrrrrrrrrrrrrr", error.message);
      });
  };

  const showToast = (type, msg) => {
    Toast.show({
      type: type,
      text1: msg,
    });
  };

  return (
    <>
      <FastImage source={images.AuthBackground} style={{ flex: 1 }}>
        <View style={{ height: 100 }}></View>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.main_container}>
            <View style={styles.container}>
              <CustomText
                text={"Sign In with email or username"}
                style={styles.screen_title}
              />
              <InputField
                placeholder={"username or email"}
                onChangeText={changedText => onChangeText(changedText, 'email')}
                keyboardType={"email-address"}
              />

              <InputField
                placeholder={"password"}
                onChangeText={changedText => onChangeText(changedText, 'password')}
                secureTextEntry
              />

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ForgetPassword");
                }}
                style={{ alignSelf: "flex-end", marginTop: 10 }}
              >
                <CustomText
                  text={"forgot password?"}
                  style={{ fontSize: 14 }}
                />
              </TouchableOpacity>
              {isLoader ? (
                <WaveLoader />
              ) : (
                <CustomButton
                  buttonText={"Sign In"}
                  onPress={() => LogInUser()}
                />
              )}

              <View style={styles.devider_View} />

              <TouchableOpacity
                style={{ alignSelf: "center", marginTop: 10 }}
              >
                <CustomText
                  text={"Dont have an account?"}
                  style={{ fontSize: 14 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("SignUp")}
                style={[styles.container_create, { marginTop: 30 }]}
              >
                <CustomText style={styles.txt} text={"Create an account"} />
              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>
        <Toast />
      </FastImage>
    </>
  );
};

export default Login;
