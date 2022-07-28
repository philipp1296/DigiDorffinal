import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import VisitorFeedNavigator from "../Navigation/VisitorFeedNavigator";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerBackTitle: "Zurück" }}
    />
    <Stack.Screen
      name="Registrieren"
      component={RegisterScreen}
      options={{ headerBackTitle: "Zurück" }}
    />
    <Stack.Screen
      name="Gastzugang"
      component={VisitorFeedNavigator}
      options={{ headerBackTitle: "Startseite" }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
