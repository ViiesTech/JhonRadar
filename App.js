import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, { useEffect } from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Route from './src/Navigation/Route';

const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      // background: '#E21A18',
    },
  };
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer theme={MyTheme} >
      {/* <StatusBar animated={true} backgroundColor="#C3CE2A" /> */}
      <Route />
    </NavigationContainer>
  );
};

export default App;
