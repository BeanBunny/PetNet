import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "./src/screens/StartScreen";
import LoginScreen from "./src/screens/petscreens/LoginScreen";
import HomeScreen from "./src/screens/petscreens/HomeScreen";
import SignUpScreen from "./src/screens/petscreens/SignUpScreen";
import ForgotPasswordScreen from "./src/screens/petscreens/ForgotPassword";
import EnterOTPScreen from "./src/screens/petscreens/EnterOTP";
import CreatePasswordScreen from "./src/screens/petscreens/CreatePassword";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { navigationRef } from "./src/navigationRef";
const Stack = createNativeStackNavigator();

// const MyTheme = {
//     ...DefaultTheme,
//     colors: {
//         ...DefaultTheme.colors,
//         card: "rgb(0, 0, 0)",
//     },
// };

export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator>
                    <Stack.Screen name="Start" component={StartScreen} />
                    {/* // ------------AUTH FLOWS --------------------------- */}
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    {/* <Stack.Screen name="Log" component={LoginScreen} /> // LOGOUT HERE  */}
                    {/* ----------pet owner flow here--------------------- */}
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                    <Stack.Screen name="EnterOTP" component={EnterOTPScreen} />
                    <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    );
}
