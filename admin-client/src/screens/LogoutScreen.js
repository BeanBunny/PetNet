import React, { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LogoutComponent = ({ navigation }) => {
    const logout = async () => {
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("userId");
        navigation.navigate("SignIn");
        return () => {};
    };

    useEffect(() => logout(), []);
    return null;
};

const styles = StyleSheet.create({});

export default LogoutComponent;
