import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screens/AccountScreen";

import MyFeedNavigator from "./MyFeedNavigator";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="MyListings" component={MyFeedNavigator} />
  </Stack.Navigator>
);

export default AccountNavigator;
