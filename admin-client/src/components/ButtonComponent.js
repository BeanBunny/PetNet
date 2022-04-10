import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";

const button = ({ text, style, disabled, onSubmit }) => {
    return (
        <View style={style}>
            <Button
                style={disabled ? styles.disabledContainer : styles.container}
                onPress={onSubmit}
                disabled={disabled}
            >
                <Text style={styles.textStyle}>{text}</Text>
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#326273",
        padding: "5%",
        borderRadius: 20,
        alignItems: "center",
    },
    disabledContainer: {
        backgroundColor: "#d3d9dc",
        padding: "5%",
        borderRadius: 20,
        alignItems: "center",
    },
    textStyle: {
        fontSize: 30,
        color: "white",
    },
});

export default button;
