import "react-native-gesture-handler";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";

// StackNavigator is an object that decides which component we are going to see on the screen
const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Login: LoginScreen,
    },
    {
        // initialRouteName is a description or configuration option that tells the navigator what is the first component that
        // should be displayed when our application first starts up
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "App",
            cardStyle: { backgroundColor: "#66C4D2" },
        },
    }
);

export default createAppContainer(navigator);
