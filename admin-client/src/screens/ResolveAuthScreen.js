import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ResolveAuthScreen = ({ navigation }) => {
    useEffect(async () => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            navigation.navigate("Home");
        } else {
            navigation.navigate("SignIn");
        }
    }, []);
    return null;
};

export default ResolveAuthScreen;
