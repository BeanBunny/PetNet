import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ButtonComp from "../components/Button";
import { Context as AuthContext } from "../context/AuthContext";

const StartScreen = ({ navigation }) => {
    const { _, isPetOrVet } = useContext(AuthContext);
    return (
        <View>
            <Image style={styles.img} source={require("../../assets/Logo1.png")} />
            <ButtonComp
                text="Pet Owner"
                routeName="Login"
                style={styles.button1}
                navigation={navigation}
                onChange={() => isPetOrVet(false)}
            />
            <View style={styles.line}></View>
            <ButtonComp
                text="Vet Clinic"
                routeName="Login"
                style={styles.button2}
                navigation={navigation}
                onChange={() => isPetOrVet(true)}
            />
        </View>
    );
};

StartScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    img: {
        justifyContent: "center",
        marginHorizontal: "10%",
        marginTop: "10%",
    },
    button1: {
        marginHorizontal: "20%",
        marginTop: "20%",
        marginBottom: "5%",
    },
    line: {
        borderBottomColor: "black",
        borderBottomWidth: 5,
        marginHorizontal: "5%",
        marginVertical: "10%",
    },
    button2: {
        marginHorizontal: "20%",
        marginTop: "5%",
    },
});

export default StartScreen;
