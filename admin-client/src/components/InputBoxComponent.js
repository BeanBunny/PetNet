import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const inputbox = ({ style, label, secure, placeholder, reducer }) => {
    const [state, dispatch] = reducer;
    return (
        <View style={style}>
            <TextInput
                label={label}
                value={state[label]}
                mode="outlined"
                secureTextEntry={secure}
                placeholder={placeholder}
                onChangeText={(val) => {
                    dispatch({ type: label, payload: val });
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default inputbox;
