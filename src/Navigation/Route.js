import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "../Navigation/AuthStack";
import MainStack from "./MainStack";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Route = () => {
  const Stack = createStackNavigator();
  const token = useSelector((state) => state.authData.token);
  console.log("tokeennnn ==>> ", token);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="AuthStack"
      >
        {token ?
         (
          <Stack.Screen name="MainStack" component={MainStack} />
          ) : (
            <Stack.Screen name="AuthStack" component={AuthStack} />
            )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
