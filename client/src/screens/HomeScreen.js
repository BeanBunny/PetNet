import React from "react";
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Pressable,
} from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";

// import Image from "../Components/ImageDetail";
// the props in here means we are passing props to Homescreen

// CHANGE THIS AFTERWARDSSSS
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "tomato",
        accent: "yellow",
        background: "#000000",
    },
};

const HomeScreen = (props) => {
    return (
        <PaperProvider>
            <View>
                {/* <Text style={styles.text}>"Hello"</Text> */}
                <Image
                    style={styles.image_resize}
                    source={require("../../assets/now.jpg")}
                />
                <Text style={styles.text}> PetNet </Text>
                {/* <Button
        onPress={() => props.navigation.navigate("Login")}
        color="white"
        title="Login"
      /> */}
                {/* <Pressable
                    style={styles.button}
                    onPress={() => props.navigation.navigate("Login")}
                >
                    <Text style={styles.text_button}> Login </Text>
                </Pressable> */}
                <View style={styles.view_button}>
                    <Button
                        mode="contained"
                        onPress={() => props.navigation.navigate("Login")}
                        style={styles.button}
                    >
                        Login
                    </Button>
                </View>
            </View>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        marginLeft: 138,
        marginTop: 8,
        color: "white",
        fontWeight: "bold",
    },
    text_button: {
        fontSize: 30,
        marginLeft: 40,
        marginTop: 4,
        color: "white",
        fontWeight: "bold",
    },
    image_resize: {
        // flex: 1,
        width: 100,
        marginTop: 60,
        height: 200,
        resizeMode: "contain",
        paddingLeft: 395,
        // paddingTop: 200,
    },
    button: {
        // alignItems: "center",
        // justifyContent: "center",
        // paddingVertical: 25,
        // paddingHorizontal: 0,
        // borderRadius: 20,
        // elevation: 100,
        // marginTop: 50,
        // marginLeft: 105,
        // marginRight: 100,
        // backgroundColor: "#32627F",
        // height: 90,
        width: "40%",
    },
    view_button: {
        alignItems: "center",
        justifyContent: "center",
    },
});

export default HomeScreen;
