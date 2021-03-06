import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LoginScreen from "../screens/LoginScreen";
import petSignUpScreen from "../screens/petscreens/SignUpScreen";
import ClinicsScreen from "../screens/petscreens/HomeScreen";
import SetAppointmentCalendarScreen from "../screens/petscreens/SetAppointmentCalendarScreen";
import AccountScreen from "../screens/petscreens/AccountScreen";
import HistoryScreen from "../screens/petscreens/HistoryScreen";
import ClinicInfo from "../screens/petscreens/ClinicInfoScreen";
import AppTime from "../screens/petscreens/AppTime";
import EditProfile from "../screens/petscreens/EditProfile";
import EditPets from "../screens/petscreens/EditPetsScreen";
import AddPetsScreen from "../screens/petscreens/AddPetsScreen";
import { View } from "react-native";

const PetOwnerNav = createNativeStackNavigator();
const PetOwnerBottomTab = createMaterialBottomTabNavigator();
const SetAppFlow = createNativeStackNavigator();
const ProfileFlow = createNativeStackNavigator();

const AppointmentFlow = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }} collapsable={false}>
            <SetAppFlow.Navigator
                initialRouteName="Clinics"
                screenOptions={{ headerShown: false }}
            >
                <SetAppFlow.Screen name="Clinics" component={ClinicsScreen} />
                <SetAppFlow.Screen name="ClinicInfo" component={ClinicInfo} />
                <SetAppFlow.Screen
                    name="AppDate"
                    component={SetAppointmentCalendarScreen}
                />
                <SetAppFlow.Screen name="AppTime" component={AppTime} />
            </SetAppFlow.Navigator>
        </View>
    );
};

const PetHomeFlow = () => {
    return (
        <ProfileFlow.Navigator
            initialRouteName="AccScreen"
            screenOptions={{ headerShown: false }}
        >
            <ProfileFlow.Screen name="AccScreen" component={AccountScreen} />
            <ProfileFlow.Screen name="EditProfile" component={EditProfile} />
            <ProfileFlow.Screen name="EditPets" component={EditPets} />
            <ProfileFlow.Screen name="AddPetScreen" component={AddPetsScreen} />
        </ProfileFlow.Navigator>
    );
};

const PetOwnerBottomTabFlow = ({ props }) => {
    return (
        <PetOwnerBottomTab.Navigator
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            screenOptions={{ headerShown: false }}
        >
            <PetOwnerBottomTab.Screen
                name="AppFlow"
                component={AppointmentFlow}
                options={{
                    tabBarLabel: "Clinics",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="hospital-box"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <PetOwnerBottomTab.Screen
                name="History"
                component={HistoryScreen}
                options={{
                    tabBarLabel: "History",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="calendar"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <PetOwnerBottomTab.Screen
                name="Account"
                component={PetHomeFlow}
                options={{
                    tabBarLabel: "Account",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="account"
                            color={color}
                            size={26}
                        />
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
            <PetOwnerNav.Screen
                name="Home"
                component={PetOwnerBottomTabFlow}
                screenOptions={{ headerShown: false }}
            />
        </PetOwnerNav.Navigator>
    );
};

export default PetOwnerFlow;
