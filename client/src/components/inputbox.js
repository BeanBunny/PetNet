import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const inputbox = ({ label, placeholder, reducer, style, secure }) => {
    const [state, dispatch] = reducer;
    return (
        <View style={style}>
            <TextInput
                label={label}
                value={state[label]}
                mode="outlined"
                secureTextEntry={secure}
                placeholder={placeholder}
                onChangeText={(val) => dispatch({ type: label, payload: val })}
            />
        </View>
    );
};

const styles2 = StyleSheet.create({});

export default inputbox;
