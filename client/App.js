import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import StartScreen from "./src/screens/StartScreen";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
// import SignUpScreen from "./src/screens/SignUpScreen";

const defaultNavigationOptions = {
  cardStyle: { backgroundColor: "#66C4D2" },
};

const navigator = createSwitchNavigator({
  loginFlow: createStackNavigator(
    {
      StartUp: StartScreen,
      Login: LoginScreen,
      // Signup: SignUpScreen,
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
