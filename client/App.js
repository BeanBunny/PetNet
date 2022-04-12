import "react-native-gesture-handler";
import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import StartScreen from "./src/screens/StartScreen";
import LoginScreen from "./src/screens/petscreens/LoginScreen";
import ClinicsScreen from "./src/screens/petscreens/HomeScreen";
import petSignUpScreen from "./src/screens/petscreens/SignUpScreen";
import ForgotPasswordScreen from "./src/screens/petscreens/ForgotPassword";
import EnterOTPScreen from "./src/screens/petscreens/EnterOTP";
import CreatePasswordScreen from "./src/screens/petscreens/CreatePassword";
import SetAppointmentCalendarScreen from "./src/screens/petscreens/SetAppointmentCalendarScreen";
import LogoutScreen from "./src/screens/petscreens/LogoutScreen";
import { Provider as AuthProvider, Context as AuthContext } from "./src/context/AuthContext";
import { navigationRef } from "./src/navigationRef";

const Stack = createNativeStackNavigator();
const VetNav = createNativeStackNavigator();

const PetOwnerNav = createNativeStackNavigator();
const PetOwnerBottomTab = createMaterialBottomTabNavigator();

const PetOwnerBottomTabFlow = () => {
    return (
        <PetOwnerBottomTab.Navigator
            initialRouteName="Clinics"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
        >
            <PetOwnerBottomTab.Screen
                name="Clinics"
                component={ClinicsScreen}
                options={{
                    tabBarLabel: "Clinics",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="hospital-box" color={color} size={26} />
                    ),
                }}
            />
            <PetOwnerBottomTab.Screen
                name="Appointment"
                component={SetAppointmentCalendarScreen}
                options={{
                    tabBarLabel: "History",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="calendar" color={color} size={26} />
                    ),
                }}
            />
            <PetOwnerBottomTab.Screen
                name="Logout"
                component={LogoutScreen}
                options={{
                    tabBarLabel: "Account",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </PetOwnerBottomTab.Navigator>
    );
};

const PetOwnerFlow = () => {
    return (
        <PetOwnerNav.Navigator screenOptions={{ headerShown: false }}>
            <PetOwnerNav.Screen name="SignUp" component={petSignUpScreen} />
            <PetOwnerNav.Screen name="Login" component={LoginScreen} />
            <PetOwnerNav.Screen name="Home" component={PetOwnerBottomTabFlow} />
        </PetOwnerNav.Navigator>
    );
};

export default function App() {
    const [token, setToken] = useState(null);

    useEffect(() => {}, []);

    return (
        <AuthProvider>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator name="MainNav" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Start" component={StartScreen} />
                    <Stack.Screen name="PetOwner" component={PetOwnerFlow} />
                    {/* <Stack.Screen name="Log" component={LoginScreen} /> // LOGOUT HERE  */}
                    {/* ----------pet owner flow here--------------------- */}
                    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                    <Stack.Screen name="EnterOTP" component={EnterOTPScreen} />
                    <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    );
}
