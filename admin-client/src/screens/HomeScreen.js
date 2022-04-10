import React from "react";
import { BottomNavigation } from "react-native-paper";
import { View, StyleSheet, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AccountScreen from "../components/AccountScreenComponent";
import SignUpReq from "../components/SignUpReqScreenComponent";
import LogoutComponent from "../components/LogoutComponent";

const HomeScreen = ({ navigation }) => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {
            key: "SignUpReqs",
            title: "SignUpReqs",
            icon: "hospital",
            color: "#66C4D2",
        },
        {
            key: "Logout",
            title: "Logout",
            icon: "account",
            color: "#326273",
        },
    ]);
    const renderScene = BottomNavigation.SceneMap({
        SignUpReqs: () => <SignUpReq />,
        Logout: () => <LogoutComponent />,
    });

    return (
        <View style={styles.bottomBar}>
            <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    bottomBar: {
        flex: 1,
        justifyContent: "flex-end",
    },
});

export default HomeScreen;
