import {
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Modal from 'react-native-modal';
import {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {styles} from './index.style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomButton from '../../Components/Button';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import CustomText from '../../Components/Text';
import images from '../../Constants/images';
import InputField from '../../Components/InputFiled';
import {RadioButton} from 'react-native-paper';
import {COLORS} from '../../Constants/theme';

import Lottie from 'lottie-react-native';

const Home = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isregisterModalVisible, setRegisterModalVisible] = useState(false);
  const [isplaceYourAddModal, setPlaceYourAddModal] = useState(false);
  const [isSelectPackageModal, setSelectPackageModal] = useState(false);
  const [isPaymentModalVisible, setPaymentModalVisible] = useState(false);
  const [isThanksModalVisible, setThanksModalVisible] = useState(false);
  const [isConfirmModalVisible, setConfirmModalVisible] = useState(false);
  const [isSettingsModalVisible, setSettingsModalVisible] = useState(false);

  const [checked, setChecked] = useState();

  const [position, setPosition] = useState({
    latitude: 	43.000000,
    longitude: -75.000000,
    latitudeDelta: 10.5555,
    longitudeDelta: 10.5575,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(pos => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 10.005,
        longitudeDelta: 10.005,
      });
    });
  }, []);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleRegisterModal = () => {
    setRegisterModalVisible(!isregisterModalVisible);
    toggleModal();
  };
  const togglePlaceYourAdd = () => {
    setPlaceYourAddModal(!isplaceYourAddModal);
    toggleModal();
    setRegisterModalVisible(false);
  };
  const toggleSelectPackage = () => {
    setSelectPackageModal(!isSelectPackageModal);
    setModalVisible(false);
    setPlaceYourAddModal(false);
    setRegisterModalVisible(false);
    setPlaceYourAddModal(false);
  };
  const toggleMakePayment = () => {
    setPaymentModalVisible(!isPaymentModalVisible);
    setModalVisible(false);
    setPlaceYourAddModal(false);
    setRegisterModalVisible(false);
    setSelectPackageModal(false);
  };
  const toggleThankYou = () => {
    setThanksModalVisible(!isThanksModalVisible);
    setModalVisible(false);
    setPlaceYourAddModal(false);
    setRegisterModalVisible(false);
    setSelectPackageModal(false);
    setPaymentModalVisible(false);
  };
  const toggleConfirm = () => {
    setConfirmModalVisible(!isConfirmModalVisible);
    setModalVisible(false);
    setPlaceYourAddModal(false);
    setRegisterModalVisible(false);
    setSelectPackageModal(false);
    setPaymentModalVisible(false);
    setThanksModalVisible(false);
  };
  const toggleModalSettings = () => {
    setSettingsModalVisible(!isSettingsModalVisible);
    setModalVisible(false);
  };

  const nearByData = [
    {
      id: 1,
      name: 'Icon 1',
      iconName: 'local-restaurant',
      title: 'Restaurants',
    },
    {
      id: 2,
      name: 'Icon 2',
      iconName: 'coffee',
      title: 'Coffee',
    },
    {
      id: 3,
      name: 'Icon 2',
      iconName: 'local-hospital',
      title: 'Hospital',
    
    },
    {
      id: 4,
      name: 'Icon 2',
      iconName: 'coffee',
      title: 'Coffee',
    },
  ];

  return (
    <View style={{flex: 1, }}>
      <View style={styles.menuBtn}>
        <TouchableOpacity style={{position:"absolute"}} onPress={() => toggleModal()}>
          <Entypo name={'menu'} size={30} color={'#fff'} style={{}} />
        </TouchableOpacity>
      </View>
      <MapView
          style={styles.map}
          initialRegion={position}
          showsUserLocation={true}
          showsMyLocationButton={true}
          followsUserLocation={true}
          showsCompass={true}
          scrollEnabled={true}
          zoomEnabled={true}
          pitchEnabled={true}
          rotateEnabled={true}>
          <Marker
            title="Yor are here"
            description="This is a description"
            coordinate={position}
          />
        </MapView>
      {/* <View style={styles.container}></View> */}
      <View style={styles.backcard}>
        <View style={styles.bottom_view}>
          <MaterialIcons
            name={'location-pin'}
            size={25}
            color={'#fff'}
            style={{marginTop: 10}}
          />

          <TextInput placeholder="Search Here..." placeholderTextColor={'white'} style={{color:'white'}}></TextInput>
          <MaterialIcons
            name={'search'}
            size={25}
            color={'#fff'}
            style={{marginTop: 10}}
          />
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={nearByData}
          renderItem={({item}) => {
            return (
              <View style={styles.flatlist_container}>
                <TouchableOpacity style={styles.nearByData_View}>
                  <MaterialIcons name={item.iconName} size={18} color="white" />
                  <CustomText text={item.title} style={{ marginHorizontal:6, fontSize:16}} />
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <View style={{height: 40}} />
      </View>
      {/* menu modal */}
      <Modal
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        isVisible={isModalVisible}
        style={styles.modal_Main_container}>
        <View style={styles.modal_container}>
          <View style={[styles.closebtn, {alignSelf: 'flex-end'}]}>
            <TouchableOpacity onPress={() => toggleModal()}>
              <Ionicons name={'close'} size={30} color={'#fff'} style={{}} />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{bottom: 20, marginLeft: 30}}>
              <Image source={images.avatar} />
            </View>
            <View style={{bottom: 20, marginLeft: 15}}>
              <CustomText
                text={'Lilly Unrah'}
                style={{fontSize: 16, fontWeight: '700'}}
              />
              <TouchableOpacity
                style={{
                  height: 25,
                  width: 85,
                  backgroundColor: 'rgb(208, 208, 229)',
                  marginTop: 38,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                }}>
                <CustomText text={'View Profile'} style={{fontSize: 11}} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{backgroundColor: '#fff', height: 1.5, marginTop: 10}} />
          <TouchableOpacity
            onPress={() => toggleRegisterModal()}
            style={styles.menu_btn}>
            <CustomText
              text={'Register Your Location'}
              style={styles.title_btn}
            />
            <Entypo
              name={'chevron-small-right'}
              size={30}
              color={'#fff'}
              style={{}}
            />
          </TouchableOpacity>
          <View style={{backgroundColor: '#fff', height: 1.5, marginTop: 10}} />
          <TouchableOpacity
            onPress={() => {
              togglePlaceYourAdd();
            }}
            style={styles.menu_btn}>
            <CustomText text={'Place Your Ad'} style={styles.title_btn} />
            <Entypo
              name={'chevron-small-right'}
              size={30}
              color={'#fff'}
              style={{}}
            />
          </TouchableOpacity>
          <View style={{backgroundColor: '#fff', height: 1.5, marginTop: 10}} />
          <TouchableOpacity
            onPress={() => toggleModalSettings()}
            style={styles.menu_btn}>
            <CustomText text={'Settings'} style={styles.title_btn} />
            <Entypo
              name={'chevron-small-right'}
              size={30}
              color={'#fff'}
              style={{}}
            />
          </TouchableOpacity>
          <View style={{backgroundColor: '#fff', height: 1.5, marginTop: 10}} />
          <TouchableOpacity style={styles.menu_btn}>
            <CustomText text={'Help and Feedback'} style={styles.title_btn} />
          </TouchableOpacity>
          <View style={{backgroundColor: '#fff', height: 1.5, marginTop: 10}} />
          <TouchableOpacity 
          onPress={() => navigation.navigate('GoThrough')}
          style={styles.menu_btn}>
            <CustomText text={'Logout'} style={styles.title_btn} />
          </TouchableOpacity>
        </View>
      </Modal>
      {/* Register Your Location */}
      <Modal
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        isVisible={isregisterModalVisible}
        style={styles.modal_Main_container}
        avoidKeyboard={false}
        
        >
            <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={styles.modal_container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <CustomText
              text={'Register Your Location'}
              style={{
                marginHorizontal: 20,
                fontSize: 18,
                fontWeight: 'bold',
                marginTop: 18,
              }}
              />
            <TouchableOpacity
              style={styles.closebtn}
              onPress={() => {
                toggleRegisterModal();
              }}>
              <Ionicons name={'close'} size={30} color={'#fff'} style={{}} />
            </TouchableOpacity>
          </View>
                <ScrollView>
          <View
            style={{
              backgroundColor: '#1EF1F5',
              height: 1.5,
              marginTop: 20,
            }}></View>
          <View style={{marginHorizontal: 25, marginTop: 15}}>
            <InputField placeholder={'Enter Your Business Location'} />
            <InputField placeholder={'Business Name'} />
            <InputField placeholder={'Your Phone Number'} />
            <InputField placeholder={'Your Email Address'} />

            <CustomButton
              buttonText={'Continue'}
              onPress={() => toggleThankYou()}
            />
          </View>
          </ScrollView>
        </View>
        </KeyboardAvoidingView>
      </Modal>
      {/* Place Your Ad.. */}
      <Modal
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        isVisible={isplaceYourAddModal}
        style={styles.modal_Main_container}>
        <View style={styles.modal_container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <CustomText
              text={'Place Your Ad..'}
              style={{
                marginHorizontal: 20,
                fontSize: 18,
                fontWeight: 'bold',
                marginTop: 18,
              }}
            />
            <TouchableOpacity
              style={styles.closebtn}
              onPress={() => {
                togglePlaceYourAdd();
              }}>
              <Ionicons name={'close'} size={30} color={'#fff'} style={{}} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#1EF1F5',
              height: 1.5,
              marginTop: 20,
            }}></View>
            <ScrollView>

           <View style={{marginHorizontal: 25, marginTop: 15}}>
            <InputField placeholder={'Enter Your Business Location'} />
            <InputField placeholder={'Business Name'} />
            <InputField placeholder={'Business Category'} />
            <InputField placeholder={'Your Phone Number'} />
            <InputField placeholder={'Your Email Address'} />

            <CustomButton
              buttonText={'Select Package'}
              onPress={() => toggleSelectPackage()}
            />
          </View>
            </ScrollView>
        </View>
      </Modal>
      {/* Select package.. */}
      <Modal
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        isVisible={isSelectPackageModal}
        style={styles.modal_Main_container}>
        <View style={styles.modal_container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <CustomText
              text={'Select Package'}
              style={{
                marginHorizontal: 20,
                fontSize: 18,
                fontWeight: 'bold',
                marginTop: 18,
              }}
            />
            <TouchableOpacity
              style={styles.closebtn}
              onPress={() => {
                toggleSelectPackage();
              }}>
              <Ionicons name={'close'} size={30} color={'#fff'} style={{}} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#1EF1F5',
              height: 1.5,
              marginTop: 20,
            }}></View>
          <View style={{marginHorizontal: 25, marginTop: 15}}>
            <TouchableOpacity
              onPress={() => setChecked('first')}
              style={[
                styles.checkingView,
                checked === 'first'
                  ? {borderColor: COLORS.primary, borderWidth: 1.5}
                  : null,
              ]}>
              <RadioButton
                value="first"
                color={COLORS.primary}
                uncheckedColor="#fff"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                style={styles.radiobtn}
                onPress={() => setChecked('first')}
              />
              <View style={{marginHorizontal: 15}}>
                <CustomText
                  text={'$119.99/Yearly'}
                  style={{fontSize: 18, fontWeight: 'bold'}}
                />
                <CustomText text={'$9.99/Month billed annually '} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setChecked('second')}
              style={[
                styles.checkingView,
                checked === 'second'
                  ? {borderColor: COLORS.primary, borderWidth: 1.5}
                  : null,
              ]}>
              <RadioButton
                value="second"
                color={COLORS.primary}
                uncheckedColor="#fff"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                style={styles.radiobtn}
                onPress={() => setChecked('second')}
              />
              <View style={{marginHorizontal: 15}}>
                <CustomText
                  text={'$50.99/Monthly'}
                  style={{fontSize: 18, fontWeight: 'bold'}}
                />
                <CustomText text={'$50.99/ billed for 1 month'} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setChecked('third')}
              style={[
                styles.checkingView,
                checked === 'third'
                  ? {borderColor: COLORS.primary, borderWidth: 1.5}
                  : null,
              ]}>
              <RadioButton
                value="third"
                color={COLORS.primary}
                uncheckedColor="#fff"
                status={checked === 'third' ? 'checked' : 'unchecked'}
                style={styles.radiobtn}
                onPress={() => setChecked('third')}
              />
              <View style={{marginHorizontal: 15}}>
                <CustomText
                  text={'$15.99/weekly'}
                  style={{fontSize: 18, fontWeight: 'bold'}}
                />
                <CustomText text={'$15.99/ billed for 1 week'} />
              </View>
            </TouchableOpacity>
            <CustomButton
              buttonText={'Continue'}
              onPress={() => toggleMakePayment()}
            />
          </View>
        </View>
      </Modal>
      {/* Make Your Payment.. */}
      <Modal
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        isVisible={isPaymentModalVisible}
        style={{
          width: '100%',
          margin: 0,}}>
        <View style={styles.modal_container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <CustomText
              text={'Make Your Payment'}
              style={{
                marginHorizontal: 20,
                fontSize: 18,
                fontWeight: 'bold',
                marginTop: 18,
              }}
            />
            <TouchableOpacity
              style={styles.closebtn}
              onPress={() => {
                toggleMakePayment();
              }}>
              <Ionicons name={'close'} size={30} color={'#fff'} style={{}} />
            </TouchableOpacity>
          </View>
          <View style={styles.cardView}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                justifyContent: 'space-around',
              }}>
              <CustomText text={'Current credit card'} style={{fontSize: 12}} />
              <CustomText text={'Add new credit card'} style={{fontSize: 12}} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View
                style={{
                  height: 90,
                  width: wp('33%'),
                  borderWidth: 1,
                  borderColor: 'white',
                  borderRadius: 10,
                  padding: 10,
                }}>
                {/* <FontAwesome name={'cc-visa'} size={20} color={'white'} /> */}

                <Fontisto name={'visa'} size={20} color={'#fff'} style={{}} />

                <Text
                  style={{fontSize: hp('1.6%'), color: 'white', marginTop: 12}}>
                  •••• •••• •••• 3294
                </Text>

                <Text style={{fontSize: hp('1.3%'), color: 'white'}}>
                  Howard Pinsky
                </Text>
              </View>
              <TouchableOpacity>
                <View
                  style={{
                    height: 90,
                    width: wp('33%'),
                    borderWidth: 1,
                    borderColor: 'white',
                    borderRadius: 10,
                    padding: 10,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      backgroundColor: '#611885',
                      borderRadius: 200,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{fontWeight: 'bold', color: 'white'}}>+</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{marginHorizontal: 10}}>
              <Text
                style={{color: 'white', fontSize: hp('1.3%'), marginTop: 15}}>
                Name of card holder
              </Text>

              <TextInput
                placeholder="Howard Pinsky"
                style={{
                  borderWidth: 2,
                  borderColor: 'white',
                  borderRadius: 20,
                  color: 'white',
                  paddingHorizontal: 20,
                  marginTop: 10,
                  backgroundColor: '#A2A2A2',
                  opacity: 0.8,
                }}
                placeholderTextColor={'white'}
              />

              <Text
                style={{color: 'white', fontSize: hp('1.3%'), marginTop: 15}}>
                Credit card number
              </Text>
              <TextInput
                placeholder="1234   3924   2394   3294"
                style={{
                  borderWidth: 2,
                  borderColor: 'white',
                  borderRadius: 20,
                  color: 'white',
                  paddingHorizontal: 20,
                  marginTop: 10,
                  backgroundColor: '#376CE3',
                }}
                placeholderTextColor={'white'}
              />

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={{color: 'white', marginTop: 10, fontSize: 12}}>
                    Expiration
                  </Text>
                  <TextInput
                    placeholder="02/25"
                    placeholderTextColor={'white'}
                    style={{
                      borderWidth: 1,
                      borderColor: '#A2A2A2',
                      borderRadius: 10,
                      width: wp('35%'),
                      height: 40,
                      paddingHorizontal: 10,
                      marginTop: 10,
                      color: 'white',
                    }}
                  />
                </View>

                <View>
                  <Text style={{color: 'white', marginTop: 10, fontSize: 12}}>
                    CVV
                  </Text>
                  <TextInput
                    placeholder="231"
                    placeholderTextColor={'white'}
                    style={{
                      borderWidth: 1,
                      borderColor: '#A2A2A2',
                      borderRadius: 10,
                      width: wp('35%'),
                      height: 40,
                      paddingHorizontal: 10,
                      marginTop: 10,
                      color: 'white',
                    }}
                  />
                </View>
              </View>
            </View>
            <CustomButton
              style={{top: 20}}
              buttonText={'Make Payment'}
              onPress={() => toggleConfirm()}
            />
          </View>
        </View>
      </Modal>
      {/* thank you.. */}
      <Modal
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        isVisible={isThanksModalVisible}
        style={{flex: 0.9,
          width: '100%',
          margin: 0,}}>
        <View
          style={{
            backgroundColor: 'rgba(220, 220, 204, 0.8)',
            flex: 0.5,
            opacity: 0.8,
            width: '100%',
            borderColor: '#1EF1F5',
            borderWidth: 1.2,
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={[styles.closebtn, {alignSelf: 'flex-end'}]}
            onPress={() => {
              toggleThankYou();
            }}>
            <Ionicons name={'close'} size={30} color={'#fff'} style={{}} />
          </TouchableOpacity>

          <View style={styles.thankYouView}>
            <CustomText
              text={'Thank You For Using \n        Our Service'}
              style={styles.thankYouView}
            />
            <Lottie
              source={images.thanks}
              autoPlay
              style={{
                height: 130,
                width: 130,
                marginTop: 20,
              }}
            />
          </View>
        </View>
      </Modal>
      {/* tConfirm.. */}
      <Modal
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        isVisible={isConfirmModalVisible}
        style={styles.modal_Main_container}>
        <View
          style={{
            backgroundColor: 'rgba(220, 220, 204, 0.8)',
            flex: 0.5,
            opacity: 0.8,
            width: '100%',
            borderColor: '#1EF1F5',
            borderWidth: 1.2,
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={[styles.closebtn, {alignSelf: 'flex-end'}]}
            onPress={() => {
              toggleConfirm();
            }}>
            <Ionicons name={'close'} size={30} color={'#fff'} style={{}} />
          </TouchableOpacity>

          <View style={styles.thankYouView}>
            <CustomText
              text={
                ' Your Ad are placed \n after 24 hours will confirm \n you through Email..'
              }
              style={styles.thankYouView}
            />
            {/* <Lottie
              source={images.thanks}
              autoPlay
              style={{
                height: 130,
                width: 130,
                marginTop: 20,
              }}
            /> */}
          </View>
        </View>
      </Modal>
      {/* Settings.. */}
      <Modal
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        isVisible={isSettingsModalVisible}
        style={{flex: 1,
          width: '100%',
          margin: 0,}}>
        <View style={styles.modal_container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <CustomText
              text={'Settings'}
              style={{
                marginHorizontal: 20,
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 18,
              }}
            />
            <TouchableOpacity
              style={styles.closebtn}
              onPress={() => {
                toggleModalSettings();
              }}>
              <Ionicons name={'close'} size={30} color={'#fff'} style={{}} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#1EF1F5',
              height: 1.5,
              marginTop: 20,
            }}
          />
          <ScrollView style={{ top:5}}>
            <View
              style={{
                backgroundColor: '#CFCFCF',
                marginHorizontal: 20,
                marginTop: 20,
                borderRadius: 10,
              }}>
              <TouchableOpacity style={styles.menu_btn}>
                <CustomText text={'General'} style={styles.title_btn} />
                <Entypo
                  name={'chevron-small-right'}
                  size={30}
                  color={'#fff'}
                  style={{}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu_btn}>
                <CustomText text={'Map Display'} style={styles.title_btn} />
                <Entypo
                  name={'chevron-small-right'}
                  size={30}
                  color={'#fff'}
                  style={{}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu_btn}>
                <CustomText text={'Voice and Sound'} style={styles.title_btn} />
                <Entypo
                  name={'chevron-small-right'}
                  size={30}
                  color={'#fff'}
                  style={{}}
                />
              </TouchableOpacity>
            </View>
            <CustomText
              text={'Driving preference'}
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginHorizontal: 20,
                marginTop: 10,
              }}
            />
            <View
              style={{
                backgroundColor: '#CFCFCF',
                marginHorizontal: 20,
                marginTop: 20,
                borderRadius: 10,
              }}>
              <TouchableOpacity style={styles.menu_btn}>
                <CustomText text={'Navigation'} style={styles.title_btn} />
                <Entypo
                  name={'chevron-small-right'}
                  size={30}
                  color={'#fff'}
                  style={{}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu_btn}>
                <CustomText text={'Vehicle Details'} style={styles.title_btn} />
                <Entypo
                  name={'chevron-small-right'}
                  size={30}
                  color={'#fff'}
                  style={{}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu_btn}>
                <CustomText text={'Alert and reports'} style={styles.title_btn} />
                <Entypo
                  name={'chevron-small-right'}
                  size={30}
                  color={'#fff'}
                  style={{}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu_btn}>
                <CustomText text={'Gas stations'} style={styles.title_btn} />
                <Entypo
                  name={'chevron-small-right'}
                  size={30}
                  color={'#fff'}
                  style={{}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu_btn}>
                <CustomText text={'Speedometer'} style={styles.title_btn} />
                <Entypo
                  name={'chevron-small-right'}
                  size={30}
                  color={'#fff'}
                  style={{}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu_btn}>
                <CustomText text={'Audio player'} style={styles.title_btn} />
                <Entypo
                  name={'chevron-small-right'}
                  size={30}
                  color={'#fff'}
                  style={{}}
                />
              </TouchableOpacity>
            </View>
            <CustomText
              text={'Notifications'}
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginHorizontal: 20,
                marginTop: 10,
              }}
            />
            <View
              style={{
                backgroundColor: '#CFCFCF',
                marginHorizontal: 20,
                marginTop: 20,
                borderRadius: 10,
                bottom:15
              }}>
              <TouchableOpacity style={styles.menu_btn}>
                <CustomText text={'Notifications'} style={styles.title_btn} />
                <Entypo
                  name={'chevron-small-right'}
                  size={30}
                  color={'#fff'}
                  style={{}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu_btn}>
                <CustomText text={'Planned drives'} style={styles.title_btn} />
                <Entypo
                  name={'chevron-small-right'}
                  size={30}
                  color={'#fff'}
                  style={{}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu_btn}>
                <CustomText text={'Reminders'} style={styles.title_btn} />
                <Entypo
                  name={'chevron-small-right'}
                  size={30}
                  color={'#fff'}
                  style={{}}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>

      
    </View>
  );
};

export default Home;
