import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { BottomNavigation } from "react-native-paper";
import AccountScreen from "../screens/AccountScreen";

const BottomBar = ({ navigation }) => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {
            key: "SignUpReqs",
            title: "SignUpReqs",
            icon: "hospital",
            color: "#66C4D2",
        },
        {
            key: "BanUsers",
            title: "BanUsers",
            icon: "account",
            color: "#326273",
        },
    ]);
    const renderScene = BottomNavigation.SceneMap({
        SignUpReqs: () => <AccountScreen />,
        BanUsers: () => <Text>Calendar</Text>,
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

export default BottomBar;
