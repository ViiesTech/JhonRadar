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

const SignUp = ({ navigation }) => {
  const [checked, setChecked] = useState("first");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoader, setIsLoader] = useState(false);

 
  const emptyStats = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
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
        <Image
          source={images.logo}
          style={{ height: 70, width: 70, alignSelf: "center", marginTop: 20 }}
        />

        <View style={styles.main_container}>
          <View style={styles.container}>
            <CustomText
              text={"Create an account"}
              style={styles.screen_title}
            />
            <InputField
              placeholder={"Full Name"}
              value={name}
              onChangeText={setName}
            />
            <InputField
              placeholder={"Email Address"}
              value={email}
              onChangeText={setEmail}
            />
            <InputField
              placeholder={"password"}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <InputField
              placeholder={"Re-type Password"}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
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
         
            <CustomButton
              onPress={() => RegisterUser()}
              buttonText={"Create an account"}
            />
          
          </View>
        </View>
      </ScrollView>
      <Toast />
    </FastImage>
  );
};

export default SignUp;
