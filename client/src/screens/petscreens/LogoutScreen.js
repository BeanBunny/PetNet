import React, { useContext } from "react";
import { Context as AuthContext } from "../../context/AuthContext";
import { View } from "react-native";
import { Headline } from "react-native-paper";
import Button from "../../components/Button";

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <View>
            <Headline>AccountScreen</Headline>
            <Button text="Logout" onChange={() => signout()} />
        </View>
    );
};

export default AccountScreen;
