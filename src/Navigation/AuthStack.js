import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import GoThrough from '../Screens/GoThrough';


const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="GoThrough">
      <Stack.Screen name="GoThrough" component={GoThrough} />
     
    </Stack.Navigator>
  );
};

export default AuthStack;
