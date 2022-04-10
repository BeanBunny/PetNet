import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Headline } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { withNavigation } from "react-navigation";

const LogoutComponent = ({ navigation }) => {
    useEffect(async () => {
        await AsyncStorage.removeItem("token");
        navigation.navigate("SignIn");
        return () => {};
    });
    return null;
};

const styles = StyleSheet.create({});

export default withNavigation(LogoutComponent);
