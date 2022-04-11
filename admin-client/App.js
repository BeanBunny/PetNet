import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NavigationContainer, Theme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from "./src/screens/HomeScreen";
import BanPetOwnerScreen from "./src/screens/BanPetOwnerScreen";
import LogoutScreen from "./src/screens/LogoutScreen";
import SignInScreen from "./src/screens/SignInScreen";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: "#694fad" }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Sign Up Reqs",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="BanPetOwner" component={BanPetOwnerScreen} />
            <Tab.Screen
                name="Logout"
                component={LogoutScreen}
                options={{
                    tabBarLabel: "Logout",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="logout" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator name="MainStack">
                <Stack.Screen
                    name="Auth"
                    component={SignInScreen}
                    options={{
                        headerLeft: () => null,
                    }}
                />
                <Stack.Screen
                    name="BottomTab"
                    component={BottomTab}
                    options={{
                        headerLeft: () => null,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
