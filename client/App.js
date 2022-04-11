import "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "./src/screens/StartScreen";
import LoginScreen from "./src/screens/petscreens/LoginScreen";
import HomeScreen from "./src/screens/petscreens/HomeScreen";
import SignUpScreen from "./src/screens/petscreens/SignUpScreen";
import ForgotPasswordScreen from "./src/screens/petscreens/ForgotPassword";
import EnterOTPScreen from "./src/screens/petscreens/EnterOTP";
import CreatePasswordScreen from "./src/screens/petscreens/CreatePassword";

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
        <NavigationContainer>
            <Stack.Navigator
                defaultScreenOptions={{
                    cardStyle: { backgroundColor: "tomato" },
                    headerStyle: { backgroundColor: "tomato" },
                }}
            >
                <Stack.Screen
                    name="Start"
                    component={StartScreen}
                    options={{
                        headerStyle: { backgroundColor: "tomato" },
                        cardStyle: { backgroundColor: "tomato" },
                    }}
                />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="EnterOTP" component={EnterOTPScreen} />
                <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
