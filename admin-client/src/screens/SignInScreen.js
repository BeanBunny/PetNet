import React, { useReducer, useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Input from "../components/InputBoxComponent";
import Button from "../components/ButtonComponent";
import restApi from "../api/restApi";

const reducer = (state, action) => {
    switch (action.type) {
        case "email":
            return { ...state, email: action.payload };
        case "password":
            return { ...state, password: action.payload };
        case "token":
            return { ...state, token: action.payload };
        case "userId":
            return { ...state, userId: action.payload };
        case "errorMessage":
            return { ...state, errorMesaage: action.payload };
        default:
            return state;
    }
};

const SignInScreen = ({ navigation }) => {
    const [state, dispatch] = useReducer(reducer, {
        email: "",
        password: "",
        token: null,
        errorMesaage: "",
        userId: "",
    });

    useEffect(async () => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            navigation.navigate("BottomTab");
        } else {
            navigation.navigate("SignIn");
        }
    }, []);

    const emailVerify = (email) => {
        const regex =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
        return email.match(regex);
    };
    const validEmail = emailVerify(state.email);

    const signin = async (email, password) => {
        try {
            const response = await restApi.post("/admin/signin", { email, password });
            await AsyncStorage.setItem("token", response.data.token);
            dispatch({ type: "token", payload: response.data.token });
            dispatch({ type: "userId", payload: response.data.userId });
            console.log("Stateee", state);
            console.log("RESPONSEEE", response.data);
            navigation.navigate("BottomTab", {
                screen: "Home",
                params: { userId: state.userId },
            });
        } catch (err) {
            dispatch({ type: "errorMessage", payload: "Your email or passsword was incorrect." });
        }
    };
    navigation.addListener("focus", () => dispatch({ type: "errorMessage", payload: "" }));
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Input
                    label="email"
                    placeholder="test@test.com"
                    reducer={[state, dispatch]}
                    style={styles.input1}
                    secure={false}
                />
                {validEmail === null ? (
                    <Text style={{ color: "red" }}>Enter correct email</Text>
                ) : null}
                <Input
                    label="password"
                    placeholder="password"
                    reducer={[state, dispatch]}
                    style={styles.input2}
                    secure={true}
                />
            </View>
            {validEmail === null ? (
                <Button text="Login" style={styles.button} disabled />
            ) : (
                <Button
                    text="Login"
                    style={styles.button}
                    disabled={false}
                    onSubmit={() => signin(state.email, state.password)}
                />
            )}
            {state.errorMesaage ? <Text style={{ color: "red" }}>{state.errorMesaage}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    img: {
        justifyContent: "center",
        marginHorizontal: "10%",
        marginTop: "10%",
    },
    container: {
        backgroundColor: "white",
        borderRadius: 10,
        height: "30%",
        // width: "100%",
        marginTop: "20%",
        marginHorizontal: "10%",
    },
    input1: {
        marginHorizontal: "15%",
        marginVertical: "5%",
    },
    input2: {
        marginHorizontal: "15%",
        marginVertical: "5%",
    },
    button: {
        marginTop: "5%",
        marginHorizontal: "15%",
    },
});

export default SignInScreen;
