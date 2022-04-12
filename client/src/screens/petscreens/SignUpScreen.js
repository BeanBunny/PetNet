import React, { useReducer, useContext } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Input from "../../components/InputBox";
import AlertButton from "../../components/AlertButton";
import ButtonComp from "../../components/Button";
import { Context as AuthContext } from "../../context/AuthContext";

const reducer = (state, action) => {
    switch (action.type) {
        case "Name":
            return { ...state, Name: action.payload };
        case "Email":
            return { ...state, Email: action.payload };
        case "Number":
            return { ...state, Number: action.payload };
        case "Password":
            return { ...state, Password: action.payload };
        case "Confirm":
            return { ...state, Confirm: action.payload };
        case "Pet":
            return { ...state, Pet: action.payload };
        case "Type":
            return { ...state, Type: action.payload };
        case "City":
            return { ...state, City: action.payload };
        default:
            return state;
    }
};

// name, phone number, email, password, confirm password
const SignUpScreen = ({ navigation }) => {
    const [reducerState, dispatch] = useReducer(reducer, {
        Name: "",
        Email: "",
        Number: "",
        Password: "",
        Confirm: "",
        Pet: "",
        City: "",
    });

    const { state, signupPet } = useContext(AuthContext);

    return (
        <View style={{ flex: 1 }}>
            <Image style={styles.img} source={require("../../../assets/Logo1.jpeg")} />
            <ScrollView style={styles.container}>
                <Input
                    label="Name"
                    placeholder="Name"
                    reducer={[reducerState, dispatch]}
                    style={styles.input1}
                    secure={false}
                />
                <Input
                    label="Number"
                    placeholder="03XXXXXXXXX"
                    reducer={[reducerState, dispatch]}
                    style={styles.input1}
                    secure={false}
                />
                <Input
                    label="Email"
                    placeholder="example@gmail.com"
                    reducer={[reducerState, dispatch]}
                    style={styles.input1}
                    secure={false}
                />
                <Input
                    label="Password"
                    placeholder="Password"
                    reducer={[reducerState, dispatch]}
                    style={styles.input2}
                    secure={true}
                />
                <Input
                    label="Confirm"
                    placeholder="Confirm Password"
                    reducer={[reducerState, dispatch]}
                    style={styles.input2}
                    secure={true}
                />
                <Input
                    label="City"
                    placeholder="Your City"
                    reducer={[reducerState, dispatch]}
                    style={styles.input2}
                    secure={false}
                />
                <Input
                    label="Pet"
                    placeholder="Pet Name"
                    reducer={[reducerState, dispatch]}
                    style={styles.input2}
                    secure={false}
                />
                <Input
                    label="Type"
                    placeholder="Pet Type"
                    reducer={[reducerState, dispatch]}
                    style={styles.input2}
                    secure={false}
                />
            </ScrollView>
            <ButtonComp
                text="Login"
                style={styles.button}
                disabled={false}
                onChange={() =>
                    signupPet({
                        name: reducerState.Name,
                        email: reducerState.Email,
                        phone: reducerState.Number,
                        password: reducerState.Password,
                        pet: { petName: reducerState.Pet, petType: reducerState.Type },
                        location: { city: reducerState.City },
                    })
                }
            />
        </View>
    );
};

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    img: {
        justifyContent: "center",
        resizeMode: "contain",
        height: "15%",
        marginHorizontal: "10%",
        marginTop: "10%",
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
        backgroundColor: "white",
        borderRadius: 10,
        height: "63%",
        marginTop: "5%",
        marginHorizontal: "10%",
    },
    button: {
        marginTop: "5%",
        marginHorizontal: "15%",
    },
});

export default SignUpScreen;
