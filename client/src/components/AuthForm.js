import React from "react";
import { View, StyleSheet } from "react-native";

const AuthForm = ({ children }) => {
    return <View style={styles.form}>{children}</View>;
};

const styles = StyleSheet.create({
    form: {
        height: "50%",
        width: "80%",
        backgroundColor: "#ffffff",
        // flex: 1,
        marginLeft: "8%",
        // position: "relative",
    },
});

export default AuthForm;
