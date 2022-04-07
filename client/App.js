import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import StartScreen from "./src/screens/StartScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
  {
    StartUp: StartScreen,
    Login: LoginScreen,
    // SignUp: SignUpScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
      cardStyle: { backgroundColor: "#66C4D2" },
    },
  }
);

export default createAppContainer(navigator);
