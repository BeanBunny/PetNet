import "react-native-gesture-handler";
import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as AsyncStorage from "expo-secure-store";
import PetOwnerFlow from "./src/navigators/PetOwnerNavigator";
import VetFlow from "./src/navigators/VetNavigator";
import StartScreen from "./src/screens/StartScreen";
// import LoginScreen from "./src/screens/petscreens/LoginScreen";
// import ClinicsScreen from "./src/screens/petscreens/HomeScreen";
// import petSignUpScreen from "./src/screens/petscreens/SignUpScreen";
import ForgotPasswordScreen from "./src/screens/petscreens/ForgotPassword";
import EnterOTPScreen from "./src/screens/petscreens/EnterOTP";
import CreatePasswordScreen from "./src/screens/petscreens/CreatePassword";
import EditServiceScreen from "./src/screens/vetscreens/EditServiceScreen";
import SetAppointmentCalendarScreen from "./src/screens/petscreens/SetAppointmentCalendarScreen";
import AccountScreen from "./src/screens/petscreens/AccountScreen";
import AddServiceScreen from "./src/screens/vetscreens/AddServiceScreen";
import AppTime from "./src/screens/petscreens/AppTime";
import AddPetsScreen from "./src/screens/petscreens/AddPetsScreen";
import ClinicInfo from "./src/screens/petscreens/ClinicInfoScreen";

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as VetProvider } from "./src/context/VetContext";
import { Provider as PetProvider } from "./src/context/PetContext";
import { navigationRef } from "./src/navigationRef";

const Stack = createNativeStackNavigator();
const VetNav = createNativeStackNavigator();

export default function App() {
    return (
        <AuthProvider>
            <PetProvider>
                <VetProvider>
                    <NavigationContainer ref={navigationRef}>
                        <Stack.Navigator
                            name="MainNav"
                            screenOptions={{ headerShown: false }}
                        >
                            <Stack.Screen
                                name="Start"
                                component={StartScreen}
                            />
                            <Stack.Screen
                                name="PetOwner"
                                component={PetOwnerFlow}
                            />
                            <Stack.Screen name="Vet" component={VetFlow} />
                            {/* <Stack.Screen name="Log" component={LoginScreen} /> // LOGOUT HERE  */}
                            {/* ----------pet owner flow here--------------------- */}
                            <Stack.Screen
                                name="ForgotPassword"
                                component={ForgotPasswordScreen}
                            />
                            <Stack.Screen
                                name="EnterOTP"
                                component={EnterOTPScreen}
                            />
                            <Stack.Screen
                                name="CreatePassword"
                                component={CreatePasswordScreen}
                            />

                            <Stack.Screen
                                name="AddServiceScreen"
                                component={AddServiceScreen}
                            />
                            <Stack.Screen
                                name="EditServiceScreen"
                                component={EditServiceScreen}
                            />
                            <Stack.Screen name="AppTime" component={AppTime} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </VetProvider>
            </PetProvider>
        </AuthProvider>
    );
}
