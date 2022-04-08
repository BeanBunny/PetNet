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

const defaultNavigationOptions = {
  cardStyle: { backgroundColor: "#66C4D2" },
};

const navigator = createSwitchNavigator({
  loginFlow: createStackNavigator(
    {
      StartUp: StartScreen,
      Login: LoginScreen,
      Signup: SignUpScreen,
      ForgotPassword: ForgotPassword,
      EnterOTP: EnterOTP,
      CreatePassword: CreatePassword,
    },
    {
      defaultNavigationOptions: defaultNavigationOptions,
    }
  ),
  mainFlow: createStackNavigator(
    {
      Home: HomeScreen,
    },
    {
      defaultNavigationOptions: defaultNavigationOptions,
    }
  ),
});

export default createAppContainer(navigator);
