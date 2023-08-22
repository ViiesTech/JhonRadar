import {View,Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './index.style';
import BackButton from '../../Components/Back Button';
import FastImage from 'react-native-fast-image';
import images from '../../Constants/images';
import Toast from "react-native-toast-message";
import CustomText from '../../Components/Text';
import InputField from '../../Components/InputFiled';
import CustomButton from '../../Components/Button';

const ForgetPassword = ({navigation, route}) => {
  const [email, setEmail] = useState('');
  // const [isLoader, setIsLoader] = useState(false);

 
 


  return (
    <FastImage source={images.AuthBackground} style={{flex: 1}}>

    <View style={styles.main_container}>
      <BackButton onPressBack={() => navigation.goBack()} />
      <Image source={images.logo} style={{height:70, width:70, alignSelf:'center', marginTop:40}}/>

      <View style={{height: 80}}></View>
      <View style={styles.container}>
        <CustomText text={'Enter Your Email'} style={styles.screen_title} />
        <InputField
          placeholder={'Email'}
          value={email}
          onChangeText={setEmail}
          keyboardType={'email-address'}
        />
  
 

        <CustomButton
          buttonText={'Submit'}
          onPress={() => {
         
          }}
        />
  
      </View>
    </View>
    <Toast />

    </FastImage>
  );
};

export default ForgetPassword;
