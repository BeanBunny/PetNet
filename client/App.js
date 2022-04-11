import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import StartScreen from "./src/screens/StartScreen";
import LoginScreen from "./src/screens/petscreens/LoginScreen";
import HomeScreen from "./src/screens/petscreens/HomeScreen";
import "react-native-gesture-handler";
import SignUpScreen from "./src/screens/petscreens/SignUpScreen";
import ForgotPasswordScreen from "./src/screens/petscreens/ForgotPassword";
import EnterOTPScreen from "./src/screens/petscreens/EnterOTP";
import CreatePasswordScreen from "./src/screens/petscreens/CreatePassword";
import apptime from "./src/screens/petscreens/AppTime";

const defaultNavigationOptions = {
  cardStyle: { backgroundColor: "#66C4D2" },
};

const navigator = createSwitchNavigator({
  loginFlow: createStackNavigator(
    {
      StartUp: StartScreen,
      Login: LoginScreen,
      Signup: SignUpScreen,
      ForgotPassword: ForgotPasswordScreen,
      EnterOTP: EnterOTPScreen,
      CreatePassword: CreatePasswordScreen,
    },
    {
      defaultNavigationOptions: defaultNavigationOptions,
    }
  ),
  mainFlow: createStackNavigator(
    {
      Home: HomeScreen,
      Time: apptime,
    },
    {
      defaultNavigationOptions: defaultNavigationOptions,
    }
  ),
});

export default createAppContainer(navigator);
