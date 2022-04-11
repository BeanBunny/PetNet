import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "./src/screens/StartScreen";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import EnterOTPScreen from "./src/screens/EnterOTPScreen";
import CreatePasswordScreen from "./src/screens/CreatePasswordScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Start" component={StartScreen} />
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
