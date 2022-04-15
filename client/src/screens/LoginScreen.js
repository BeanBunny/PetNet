import React, { useReducer, useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Input from "../components/InputBox";
import ButtonComp from "../components/Button";
import Textbutton from "../components/TextOnlyButton";
import { Context as AuthContext } from "../context/AuthContext";
import { errorEmail, errorRequired } from "../inputvalidation/validators";
import ErrorTextComponent from "../components/ErrorTextComponent";
const reducer = (state, action) => {
    switch (action.type) {
        case "Email":
            return { ...state, Email: action.payload };
        case "Password":
            return { ...state, Password: action.payload };
        default:
            return state;
    }
};

const LoginScreen = ({ navigation }) => {
    const [reducerState, dispatch] = useReducer(reducer, {
        Email: "",
        Password: "",
    });
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    const errorMessageEmail = errorEmail(reducerState.Email);
    // const errorMessagePassword = errorPassword(reducerState.Password);
    const errorMessagePassword = errorRequired(
        reducerState.Password,
        "Password"
    );
    // CHECK THIS AFTER SIGN UPPP
    navigation.addListener("focus", clearErrorMessage);

    return (
        <View style={{ flex: 1 }}>
            <Image
                style={styles.img}
                source={require("../../assets/Logo1.jpeg")}
            />
            <View style={styles.container}>
                <Input
                    label="Email"
                    placeholder="example@gmail.com"
                    reducer={[reducerState, dispatch]}
                    style={styles.input1}
                    secure={false}
                />
                {/* TELLS IF THE EMAIL IS INCORRECT */}
                {errorMessageEmail != null ? (
                    <ErrorTextComponent error={errorMessageEmail} />
                ) : null}
                <Input
                    label="Password"
                    placeholder="Password"
                    reducer={[reducerState, dispatch]}
                    style={styles.input2}
                    secure={true}
                />
                {errorMessagePassword != null ? (
                    <ErrorTextComponent error={errorMessagePassword} />
                ) : null}
                <Textbutton
                    text="Forgot Password?"
                    navigation={navigation}
                    marginLeft="38%"
                    routeName="ForgotPassword"
                />
                {state.errorMessage ? (
                    <ErrorTextComponent error={state.errorMessage} />
                ) : null}
            </View>
            {errorMessageEmail || errorMessagePassword ? (
                <ButtonComp text="Login" style={styles.button} disabled />
            ) : (
                <ButtonComp
                    text="Login"
                    style={styles.button}
                    disabled={false}
                    onChange={() =>
                        signin({
                            email: reducerState.Email,
                            password: reducerState.Password,
                            isVet: state.isVet,
                        })
                    }
                />
            )}
            <View>
                <Text
                    style={{ marginLeft: "10%", fontSize: 16, marginTop: "3%" }}
                >
                    Don't have an account?
                </Text>
                <Textbutton
                    text="Sign Up"
                    navigation={navigation}
                    marginLeft="29%"
                    routeName="SignUp"
                />
            </View>
        </View>
    );
};

LoginScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    img: {
        justifyContent: "center",
        resizeMode: "contain",
        height: "30%",
        marginHorizontal: "10%",
        marginTop: "15%",
    },
    input1: {
        marginHorizontal: "15%",
        marginVertical: "5%",
    },
    input2: {
        marginHorizontal: "15%",
        marginVertical: "5%",
    },
    container: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 10,
        // height: "30%",
        marginTop: "20%",
        marginHorizontal: "10%",
    },
    forgor: {
        color: "blue",
        marginLeft: "60%",
    },
    button: {
        marginTop: "5%",
        marginHorizontal: "15%",
    },
});

export default LoginScreen;
