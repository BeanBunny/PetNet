import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";

const button = ({ style, text, navigation, routeName }) => {
    return (
        <View style={style}>
            <TouchableOpacity
                onPress={() => navigation.navigate(routeName)}
                style={styles.container}
            >
                <Text style={styles.textStyle}>{text}</Text>
            </TouchableOpacity>
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
    textStyle: {
        fontSize: 15,
        color: "white",
    },
});

export default button;
