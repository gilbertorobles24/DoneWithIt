import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: true, presentation: 'modal'}}>
    <Stack.Screen name="FeedScreen" options={{headerTitle: "Feed"}} component={ListingsScreen} />
    <Stack.Screen options={{headerShown: false}} name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
