import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";

const TextOnlyButton = ({
    style,
    text,
    margin_left,
    routeName,
    navigation,
    textStyle,
}) => {
    return (
        <View style={style}>
            <TouchableOpacity
                onPress={() => navigation.navigate(routeName)}
                style={newstyle(margin_left)}
            >
                <Text style={textStyle}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

function newstyle(margin_left) {
    return {
        marginTop: "-9.75%",
        marginLeft: margin_left,
        padding: "5%",
        alignItems: "center",
    };
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        color: "blue",
    },
});

export default TextOnlyButton;
