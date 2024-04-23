import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import RegisterLocation from '../Screens/ModalScreens/registerLocation';
import MenuModal from '../Components/Modal/MenuModal';
import PlaceAd from '../Screens/ModalScreens/placeAd';
import Settings from '../Screens/ModalScreens/settings';
import chooseLocation from '../Screens/ModalScreens/chooseLocation';
import MyDrawer from './DrawerStack';

const Stack = createStackNavigator();


const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Drawer"
    >
      <Stack.Screen name="Drawer" component={MyDrawer} />
      {/* <Stack.Screen name='MenuModal' component={MenuModal}></Stack.Screen> */}
      <Stack.Screen name="RegisterLocation" component={RegisterLocation} />
      <Stack.Screen name="PlaceAd" component={PlaceAd} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="ChooseLocation" component={chooseLocation} />
    </Stack.Navigator>
  );
};

export default MainStack;
