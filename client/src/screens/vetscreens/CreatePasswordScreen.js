import React, { useReducer } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Input from "../../components/InputBox";
import AlertButton from "../../components/AlertButton";

const reducer = (state, action) => {
    switch (action.type) {
        case "New":
            return { ...state, New: action.payload };
        case "Confirm":
            return { ...state, Confirm: action.payload };
        default:
            return state;
    }
};

const CreatePassword = ({ navigation }) => {
    const [state, dispatch] = useReducer(reducer, { New: "", Confirm: "" });
    return (
        <View>
            <Image style={styles.img} source={require("../../../assets/Logo1.png")} />
            <View style={styles.container}>
                <Input
                    label="New"
                    placeholder="New Password"
                    reducer={[state, dispatch]}
                    style={styles.input}
                    secure={true}
                />
                <Input
                    label="Confirm"
                    placeholder="Confirm Password"
                    reducer={[state, dispatch]}
                    style={styles.input}
                    secure={true}
                />
            </View>
            <AlertButton
                style={styles.button}
                text="Confirm"
                route="Login"
                alert1="Your new password has been created"
                alert2="Login with your new password to continue."
                alert3="Login!"
                navigation={navigation}
            />
        </View>
    );
};

CreatePassword.navigationOptions = () => {
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
        marginTop: "10%",
    },
    input: {
        marginHorizontal: "15%",
        marginVertical: "5%",
    },
    container: {
        backgroundColor: "white",
        borderRadius: 10,
        height: "30%",
        marginTop: "20%",
        marginHorizontal: "10%",
    },
    button: {
        marginTop: "5%",
        marginHorizontal: "15%",
    },
});

export default CreatePassword;
