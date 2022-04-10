import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import StartScreen from "./src/screens/StartScreen";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import "react-native-gesture-handler";
import SignUpScreen from "./src/screens/SignUpScreen";
import ForgotPassword from "./src/screens/ForgotPassword";
import EnterOTP from "./src/screens/EnterOTP";
import CreatePassword from "./src/screens/CreatePassword";
import App from "./src/screens/SetAppointmentCalendar";
import VetLoginScreen from  "./src/screens/VetLoginScreen";
import VetSignUpScreen from "./src/screens/VetSignUpScreen";


const defaultNavigationOptions = {
  cardStyle: { backgroundColor: "#66C4D2" },
};

const navigator = createSwitchNavigator({
  loginFlow: createStackNavigator(
    {
     // SetAppointment: App,
      StartUp: StartScreen,
      VetLogin: VetLoginScreen,
      Login: LoginScreen,
      Signup: SignUpScreen,
      ForgotPassword: ForgotPassword,
      EnterOTP: EnterOTP,
      CreatePassword: CreatePassword,
      VetSignUp: VetSignUpScreen,
      
    },
    {
      defaultNavigationOptions: defaultNavigationOptions,
    }
  ),
  mainFlow: createStackNavigator(
    {
      Home: StartScreen,
    },
    {
      defaultNavigationOptions: defaultNavigationOptions,
    }
  ),
});

export default createAppContainer(navigator);
