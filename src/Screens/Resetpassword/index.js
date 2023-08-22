import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './index.style';
import BackButton from '../../Components/Back Button';
import FastImage from 'react-native-fast-image';
import images from '../../Constants/images';
import Modal from 'react-native-modal';
import Toast from "react-native-toast-message";
import Lottie from 'lottie-react-native';
import CustomText from '../../Components/Text';
import InputField from '../../Components/InputFiled';
import CustomButton from '../../Components/Button';

const ResetPassword = ({navigation, route}) => {
  const {ids} = route.params;
  console.log('idddddss', ids);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  // const {itemId, id} = route.params;

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

   

  const handlePasswordChange = text => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = text => {
    setConfirmPassword(text);
  };
  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
    }
  };

  const showToast = (type, msg) => {
    Toast.show({
      type: type,
      text1: msg,
    });
  };

  return (
    <FastImage source={images.AuthBackground} style={{flex: 1}}>
      <BackButton onPressBack={() => navigation.goBack()} />

      <View style={{height: 100}}></View>
      <View style={styles.container}>
        <CustomText text={'Reset Your Password'} style={styles.screen_title} />
        <InputField
          placeholder={'NewPassword'}
          value={password}
          onChangeText={handlePasswordChange}
        />
        <InputField
          placeholder={'ReEnter Password'}
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
        />
        {passwordError && <CustomText text={setPasswordError()} />}
    
        <CustomButton
          buttonText={'Submit'}
          onPress={() => {
            AddNewPassword()
          }}
        />
 
      </View>
      <View>
            <Modal isVisible={isModalVisible}>
              <FastImage
                source={images.Background}
                style={{flex: 0.6, alignItems: 'center'}}>
              {/* <View
                style={{
                  flex: 0.6,
                  backgroundColor: '#E61917',
                }}> */}
                <Lottie
                  source={images.passwordLottie}
                  autoPlay
                  style={{
                    height: 120,
                    width: 120,
                    marginTop: 20,
                  }}
                />
                <CustomText
                  text={'Successfully Changed Password'}
                  style={{fontSize: 18, fontWeight: 'bold', marginTop: 15}}
                />
                <CustomButton
                  onPress={() => {
                    navigation.navigate('Login');
                  }}
                  buttonText={'Back To Login'}
                  style={{width: '80%'}}
                />
                </FastImage>
              {/* </View> */}
            </Modal>
          </View>
          <Toast/>
    </FastImage>
  );
};

export default ResetPassword;
