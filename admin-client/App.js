import "react-native-gesture-handler";
import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SignInScreen from "./src/screens/SignInScreen";
import HomeScreen from "./src/screens/HomeScreen";
import VerificationScreen from "./src/screens/VerificationScreen";
import ListReportScreen from "./src/screens/ListReportScreen";
import ReportHandlingScreen from "./src/screens/ReportHandlingScreen";
import AccountScreen from "./src/components/AccountScreenComponent";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";

const switchNavigator = createSwitchNavigator({
    ResolveAuth: ResolveAuthScreen,
    SignIn: SignInScreen,
    mainFlow: createStackNavigator({
        Home: HomeScreen,
        Verification: VerificationScreen,
        ListReport: ListReportScreen,
        ReportHandling: ReportHandlingScreen,
        Account: AccountScreen,
    }),
});

export default createAppContainer(switchNavigator);
