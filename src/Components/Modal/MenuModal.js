import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { styles } from "../../Screens/Home/index.style";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import images from "../../Constants/images";
import { UpdateState, logOut } from "../../Redux/authSlice";
import CustomText from "../Text";
import RegisterLocation from "../../Screens/ModalScreens/registerLocation";
import { useDispatch, useSelector } from "react-redux";
import Person from 'react-native-vector-icons/Ionicons'


const MenuModal = ({ navigation, toggleRegisterModal }) => {
  const [isregisterModalVisible, setRegisterModalVisible] = useState(false);
  const dispatch = useDispatch()
  const userName = useSelector(state => state.authData.user.name)

  // const toggleRegisterModal = () => {
  //   setRegisterModalVisible(!isregisterModalVisible);
  //   // toggleModal();
  // };                                                                                                                                                                    

  return (

    <View style={styles.modal_container}>
      <View style={[styles.closebtn, { alignSelf: "flex-end" }]}>
        <TouchableOpacity onPress={() => {
          navigation.closeDrawer();
        }}>
          <Ionicons name={"close"} size={30} color={"#fff"} style={{}} />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", }}>
        <TouchableOpacity style={{ bottom: 20, marginLeft: 30, height: 60, width: 60, borderColor: 'black', borderWidth: 2, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
          <Person name='person' color={'black'} size={40} />
        </TouchableOpacity>
        <View style={{ bottom: 20, marginLeft: 15, gap: 5 }}>
          <CustomText
            text={userName}
            style={{ fontSize: 16, fontWeight: "700" }}
          />
          <TouchableOpacity
            style={{
              height: 25,
              width: 85,
              backgroundColor: "rgb(208, 208, 229)",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            <CustomText text={"View Profile"} style={{ fontSize: 11 }} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{ backgroundColor: "#fff", height: 1.5, marginTop: 10 }}
      />
      <TouchableOpacity
        onPress={() => {

          // navigation.closeDrawer()
          navigation.navigate('RegisterLocation');
        }}
        style={styles.menu_btn}
      >
        <CustomText
          text={"Register Your Location"}
          style={styles.title_btn}
        />
        <Entypo
          name={"chevron-small-right"}
          size={30}
          color={"#fff"}
          style={{}}
        />

        {/* <Modal
          animationIn="slideInLeft"
          animationOut="slideOutRight"
          isVisible={isregisterModalVisible}
          style={styles.modal_Main_container}
        >
          <RegisterLocation />
        </Modal> */}
      </TouchableOpacity>
      <View
        style={{ backgroundColor: "#fff", height: 1.5, marginTop: 10 }}
      />
      <TouchableOpacity
        onPress={() => {
          // navigation.closeDrawer()
          navigation.navigate('PlaceAd');
        }}
        style={styles.menu_btn}
      >
        <CustomText text={"Place Your Ad"} style={styles.title_btn} />
        <Entypo
          name={"chevron-small-right"}
          size={30}
          color={"#fff"}
          style={{}}
        />
      </TouchableOpacity>
      <View
        style={{ backgroundColor: "#fff", height: 1.5, marginTop: 10 }}
      />
      <TouchableOpacity
        // onPress={() => toggleModalSettings()}

        onPress={() => {
          // navigation.closeDrawer()
          navigation.navigate('Settings');
        }}
        style={styles.menu_btn}
      >
        <CustomText text={"Settings"} style={styles.title_btn} />
        <Entypo
          name={"chevron-small-right"}
          size={30}
          color={"#fff"}
          style={{}}
        />
      </TouchableOpacity>
      <View
        style={{ backgroundColor: "#fff", height: 1.5, marginTop: 10 }}
      />
      <TouchableOpacity style={styles.menu_btn}>
        <CustomText text={"Help and Feedback"} style={styles.title_btn} />
      </TouchableOpacity>
      <View
        style={{ backgroundColor: "#fff", height: 1.5, marginTop: 10 }}
      />
      <TouchableOpacity
        onPress={() => {
          // navigation.closeDrawer()
          dispatch(logOut());
        }}
        style={styles.menu_btn}
      >
        <CustomText text={"Logout"} style={styles.title_btn} />
      </TouchableOpacity>
    </View>
  )
}

export default MenuModal