import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import StartScreen from "./src/screens/StartScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

const navigator = createStackNavigator(
  {
    StartUp: StartScreen,
    Login: LoginScreen,
    // SignUp: SignUpScreen,
  },
  {
    initialRouteName: "StartUp",
    defaultNavigationOptions: {
      title: "App",
      cardStyle: { backgroundColor: "#66C4D2" },
    },
  }
);

export default createAppContainer(navigator);
