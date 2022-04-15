import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LoginScreen from "../screens/LoginScreen";
import VetSignUpScreen from "../screens/vetscreens/VetSignUpScreen";
import ClinicSignUpScreen from "../screens/vetscreens/ClinicSignUpScreen";
import AfterSignUpScreen from "../screens/vetscreens/AfterSignUpScreen";
import ViewAppointmentScreen from "../screens/vetscreens/ViewAppointmentScreen";
import { View } from "react-native";

const VetOwnerNav = createNativeStackNavigator();
const VetOwnerBottomTab = createMaterialBottomTabNavigator();
const SetAppFlow = createNativeStackNavigator();

// const AppointmentFlow = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1 }} collapsable={false}>
//       <SetAppFlow.Navigator initialRouteName="Clinics">
//         <SetAppFlow.Screen name="Clinics" component={ClinicsScreen} />
//         <VetOwnerBottomTab.Screen
//           name="AppDate"
//           component={SetAppointmentCalendarScreen}
//         />
//       </SetAppFlow.Navigator>
//     </View>
//   );
// };

const VetOwnerBottomTabFlow = ({ props }) => {
    return (
        <VetOwnerBottomTab.Navigator
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
        >
            <VetOwnerBottomTab.Screen
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
            <VetOwnerBottomTab.Screen
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
            <VetOwnerBottomTab.Screen
                name="Logout"
                component={AccountScreen}
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
                component={ViewAppointmentScreen}
                screenOptions={{ headerShown: false }}
            />
        </VetOwnerNav.Navigator>
    );
};

export default VetFlow;
