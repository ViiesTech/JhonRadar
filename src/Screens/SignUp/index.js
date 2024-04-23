import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { styles } from "./index.style";
import { RadioButton } from "react-native-paper";
import BackButton from "../../Components/Back Button";
import FastImage from "react-native-fast-image";
import images from "../../Constants/images";
import { COLORS } from "../../Constants/theme";
import Toast from "react-native-toast-message";
import CustomText from "../../Components/Text";
import InputField from "../../Components/InputFiled";
import CustomButton from "../../Components/Button";
import axios from "axios";
import { useSelector } from "react-redux";
import LoaderModal from "../../Components/LoaderModal";
import BasUrl from "../../BasUrl";

const SignUp = ({ navigation }) => {
  const [checked, setChecked] = useState("first");
  const [isLoader, setIsLoader] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const onChangeText = (changedText, key) => {
    setForm(oldForm => {
      return { ...oldForm, [key]: changedText };
    });
  };
  const loader = useSelector((state) => state.authData.isLoader);

  const RegistorUser = async () => {
    setIsLoader(true);
    let data = JSON.stringify({
      name: form.name,
      email: form.email,
      password: form.password,
      tc: true,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${BasUrl}Register`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        setIsLoader(false);
        navigation.navigate("Login");

        console.log("loggggggggggggggggg", JSON.stringify(response.data));
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
    <FastImage source={images.AuthBackground} style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <BackButton onPressBack={() => navigation.goBack()} />
        <View style={{ height: 100 }}></View>

        <View style={styles.main_container}>
          <View style={styles.container}>
            <CustomText
              text={"Create an account"}
              style={styles.screen_title}
            />
            <InputField
              placeholder={"Full Name"}

              onChangeText={changedText => onChangeText(changedText, 'name')}
            />

            <InputField
              placeholder={"Email Address"}

              onChangeText={changedText => onChangeText(changedText, 'email')}
            />

            <InputField
              placeholder={"password"}

              onChangeText={changedText => onChangeText(changedText, 'password')}
              secureTextEntry
            />
            <InputField
              placeholder={"Re-type Password"}
              onChangeText={changedText => onChangeText(changedText, 'confirmPassword')}
              secureTextEntry
            />

            <View style={styles.checkView}>
              <RadioButton
                value="first"
                color={COLORS.primary}
                uncheckedColor="#949494"
                status={checked === "first" ? "checked" : "unchecked"}
              />
              <CustomText
                text={"I have read and accept the "}
                style={styles.termsText}
              />
              <TouchableOpacity>
                <CustomText
                  text={"terms and conditions"}
                  style={styles.termsTxt}
                />
              </TouchableOpacity>
            </View>
            {isLoader ? (
              <LoaderModal />
            ) : (
              <CustomButton
                onPress={() => {
                  RegistorUser();
                }}
                buttonText={"Create an account"}
              />
            )}
          </View>
        </View>

      </ScrollView>
      <Toast />
    </FastImage>
  );
};

export default SignUp;
