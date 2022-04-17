import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LoginScreen from "../screens/LoginScreen";
import VetSignUpScreen from "../screens/vetscreens/VetSignUpScreen";
import ClinicSignUpScreen from "../screens/vetscreens/ClinicSignUpScreen";
import AfterSignUpScreen from "../screens/vetscreens/AfterSignUpScreen";
import VetHomeScreen from "../screens/vetscreens/HomeScreen";
import AccountScreen from "../screens/vetscreens/AccountScreen";
import ApprComApptScreen from "../screens/vetscreens/ApprComApptScreen";
import Editserv from "../screens/vetscreens/EditServiceScreen";
import Editprofile from "../screens/vetscreens/EditProfile";
import Addserv from "../screens/vetscreens/AddServiceScreen";
import CreatePassword from "../screens/vetscreens/CreatePasswordScreen";
import { View } from "react-native";

const VetOwnerNav = createNativeStackNavigator();
const VetOwnerBottomTab = createMaterialBottomTabNavigator();
const ProfileNav = createNativeStackNavigator();

const ProfileFlow = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }} collapsable={false}>
            <ProfileNav.Navigator screenOptions={{ headerShown: false }}>
                <ProfileNav.Screen name="Account" component={AccountScreen} />
                <ProfileNav.Screen name="EditProfile" component={Editprofile} />
                <ProfileNav.Screen name="EditServ" component={Editserv} />
                <ProfileNav.Screen name="AddServ" component={Addserv} />
                <ProfileNav.Screen
                    name="ChangePassword"
                    component={CreatePassword}
                />
            </ProfileNav.Navigator>
        </View>
    );
};

const VetOwnerBottomTabFlow = ({ props }) => {
    return (
        <VetOwnerBottomTab.Navigator
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
        >
            <VetOwnerBottomTab.Screen
                name="PendingReq"
                component={VetHomeScreen}
                options={{
                    tabBarLabel: "Pending Appointments",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="clipboard"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <VetOwnerBottomTab.Screen
                name="CurrComp"
                component={ApprComApptScreen}
                options={{
                    tabBarLabel: "Appointments",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="calendar"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <VetOwnerBottomTab.Screen
                name="AccountFlow"
                component={ProfileFlow}
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
        </VetOwnerBottomTab.Navigator>
    );
};

const VetFlow = () => {
    return (
        <VetOwnerNav.Navigator screenOptions={{ headerShown: false }}>
            <VetOwnerNav.Screen name="SignUp" component={VetSignUpScreen} />
            <VetOwnerNav.Screen
                name="clinicSignUp"
                component={ClinicSignUpScreen}
            />
            <VetOwnerNav.Screen name="Login" component={LoginScreen} />
            <VetOwnerNav.Screen
                name="AfterSignUp"
                component={AfterSignUpScreen}
            />
            <VetOwnerNav.Screen
                name="Home"
                component={VetOwnerBottomTabFlow}
                screenOptions={{ headerShown: false }}
            />
        </VetOwnerNav.Navigator>
    );
};

export default VetFlow;
