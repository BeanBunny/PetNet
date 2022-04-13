import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import StartScreen from "./src/screens/StartScreen";
// import LoginScreen from "./src/screens/LoginScreen";
// import SignUpScreen from "./src/screens/SignUpScreen";
import ClinicInfoScreen from "./src/screens/ClinicInfoScreen";

const navigator = createStackNavigator(
  {
    ClinicInfo: ClinicInfoScreen,
    // Login: LoginScreen,
    // SignUp: SignUpScreen,
  },
  {
    initialRouteName: "ClinicInfo",
    defaultNavigationOptions: {
      title: "App",
      cardStyle: { backgroundColor: "#66C4D2" },
    },
  }
);

export default createAppContainer(navigator);
