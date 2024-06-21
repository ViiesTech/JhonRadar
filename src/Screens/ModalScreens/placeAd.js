import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../Home/index.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomText from '../../Components/Text';
import InputField from '../../Components/InputFiled';
import CustomButton from '../../Components/Button';
import ImageCropPicker from 'react-native-image-crop-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import ImageSelect from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import {useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';
import BasUrl from '../../BasUrl';

const PlaceAd = ({navigation}) => {
  const [imagePath, setImagePath] = useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [showImageIcon, setShowImageIcon] = useState(true);
  const userToken = useSelector(state => state.authData.token);
  const [isLoading, setIsLoading] = useState(false);
  let data = new FormData();

  console.log('value', value);
  const [items, setItems] = useState([{label: '', value: ''}]);

  const onChangeText = (changedText, key) => {
    setForm(oldForm => {
      return {...oldForm, [key]: changedText};
    });
  };

  const [form, setForm] = useState({
    BusinessCategory: '',
    AdTitle: '',
    AdDescription: '',
  });
  useEffect(() => {
    const sub = navigation.addListener('focus', () => {
      CallFunction();
    });
  }, [navigation]);

  const CallFunction = () => {
    console.log('Calling ......');
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${BasUrl}myLocation`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    };

    axios
      .request(config)
      .then(response => {
        console.log('response', JSON.stringify(response.data));
        // if (response?.data?.data !== undefined) {
        const items = response.data.data.map(item => ({
          label: item.BussinessName,
          value: item._id,
        }));
        setItems(items);
        // }
      })
      .catch(error => {
        console.log('error', error.response.data);
      });
  };

  const showToast = (type, msg) => {
    Toast.show({
      type: type,
      text1: msg,
    });
  };
  const openGallery = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImagePath(image);
      setShowImageIcon(false);

      console.log('ImagePath', imagePath);
    });
  };

  function placeAd() {
    setIsLoading(true);

    let data = new FormData();
    console.log(imagePath?.path, imagePath.mime);
    data.append('BussinessLocationID', value);
    data.append('BusinessCategory', form.BusinessCategory);
    data.append('AdTitle', form.AdTitle);
    data.append('AdDescription', form.AdDescription);
    data.append('images', {
      uri: imagePath?.path,
      name: 'image.jpg',
      type: imagePath?.mime,
    });

    let config = {
      method: 'post',
      url: 'https://www.yourappdemo.com/johnradar/api/user/AdsRegister',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${userToken}`,
      },
      data: data, // Pass data as the 'data' property of the config
    };
    if (
      value &&
      form.BusinessCategory &&
      form.AdTitle &&
      form.AdDescription &&
      imagePath?.path &&
      imagePath?.mime
    ) {
      axios
        .request(config)
        .then(response => {
          console.log('response', JSON.stringify(response.data));
          setIsLoading(false);
          if (response.data.Status === 'Success') {
            showToast('success', response.data.message);
            navigation.navigate('Home');
          } else {
            showToast('error', response.data.message);
          }
        })
        .catch(error => {
          setIsLoading(false);
          showToast('error', error.message);

          console.log(error.response.data);
          console.log(error.data);
        });
    } else {
      setIsLoading(false);
      return showToast('error', 'Plz Fill The Required Fields');
    }
  }
  return (
    <ImageBackground
      source={require('../../Assests/Images/mapImage.png')}
      style={{flex: 1}}>
      <View style={containerStyles.container}>
        <View
          style={{
            position: 'absolute',
            top: '50%',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          {isLoading ? (
            <ActivityIndicator
              style={{zIndex: 10}}
              color={'black'}
              size={'30'}
            />
          ) : null}
        </View>
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
            // onPress={() => {
            //     togglePlaceYourAdd();
            // }}
            onPress={() => navigation.goBack()}>
            <Ionicons name={'close'} size={30} color={'#fff'} style={{}} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#1EF1F5',
            height: 1.5,
            marginTop: 20,
          }}></View>
        {/* <ScrollView> */}
        <View style={{marginHorizontal: 25, marginTop: 15}}>
          {showImageIcon ? (
            <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}
              onPress={openGallery}>
              <ImageSelect name="image-size-select-actual" size={150} />
            </TouchableOpacity>
          ) : (
            imagePath !== '' && (
              <TouchableOpacity
                onPress={openGallery}
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={{uri: imagePath?.path}}
                  style={{height: 170, width: 200, borderRadius: 10}}
                />
              </TouchableOpacity>
            )
          )}

          <InputField
            onChangeText={changedText =>
              onChangeText(changedText, 'BusinessCategory')
            }
            placeholder={'Business Category'}
          />
          <InputField
            onChangeText={changedText => onChangeText(changedText, 'AdTitle')}
            placeholder={'AdTitle'}
          />
          <InputField
            onChangeText={changedText =>
              onChangeText(changedText, 'AdDescription')
            }
            placeholder={'Ad Description'}
          />
          <View style={{marginVertical: 10}}></View>
          <DropDownPicker
            style={{backgroundColor: 'white'}}
            open={open}
            value={value}
            items={items}
            placeholder="Select Your Location"
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            dropDownDirection="down"
            dropDownContainerStyle={{
              backgroundColor: 'white',
              maxHeight: 150,
            }}
            scrollViewProps={{
              persistentScrollbar: true, // Enable persistent scrollbar
              showsVerticalScrollIndicator: true, // Show vertical scrollbar
              nestedScrollEnabled: true, // Enable nested scrolling
            }}
          />
          <CustomButton buttonText={'Select Package'} onPress={placeAd} />
        </View>
        {/* </ScrollView> */}
      </View>
    </ImageBackground>
  );
};

export default PlaceAd;

const containerStyles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(128, 128, 128,0.8)',
    flex: 1,
    // opacity: 0.8,
    width: '100%',
    borderTopColor: '#1EF1F5',
    borderBottomColor: '#1EF1F5',
    borderWidth: 1.2,
    marginTop: 20,
  },
});
