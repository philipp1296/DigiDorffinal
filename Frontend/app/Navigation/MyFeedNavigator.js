import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingScreen from '../screens/ListingScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import MyListingScreen from '../screens/MyListingScreen';

const Stack = createNativeStackNavigator();

const MyFeedNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown: false, presentation:"modal"}}>
        <Stack.Screen name="Listings" component={MyListingScreen}/>
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen}/>
    </Stack.Navigator>
);

export default MyFeedNavigator;