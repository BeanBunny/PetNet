import React, { useContext, useReducer } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import Input from "../../components/InputBox";
import ButtonComp from "../../components/Button";
import { Context as AuthContext } from "../../context/AuthContext";
import { Picker } from "@react-native-picker/picker";

const reducer = (state, action) => {
    switch (action.type) {
        case "CNIC":
            return { ...state, CNIC: action.payload };
        case "Email":
            return { ...state, Email: action.payload };
        case "Password":
            return { ...state, Password: action.payload };
        case "Confirm":
            return { ...state, Confirm: action.payload };
        case "Number":
            return { ...state, Number: action.payload };
        case "Clinic":
            return { ...state, Clinic: action.payload };
        case "About":
            return { ...state, About: action.payload };
        case "City":
            return { ...state, City: action.payload };
        default:
            return state;
    }
};

const ClinicSignUpScreen = ({ navigation, route }) => {
    const [reducerState, dispatch] = useReducer(reducer, {
        CNIC: "",
        Email: "",
        Password: "",
        Confirm: "",
        Number: "",
        Clinic: "",
        About: "",
        City: "",
    });
    const { pvmc_reg, isVet } = route.params;
    const { state, signupVet } = useContext(AuthContext);
    return (
        <View style={{ flex: 1 }}>
            <Image
                style={styles.img}
                source={require("../../../assets/Logo1.jpeg")}
            />
            <ScrollView style={styles.container}>
                <Input
                    label="CNIC"
                    placeholder="CNIC"
                    reducer={[reducerState, dispatch]}
                    style={styles.input}
                    secure={false}
                />
                <Input
                    label="Email"
                    placeholder="Email"
                    reducer={[reducerState, dispatch]}
                    style={styles.input}
                    secure={false}
                />
                <Input
                    label="Password"
                    placeholder="Password"
                    reducer={[reducerState, dispatch]}
                    style={styles.input}
                    secure={true}
                />
                <Input
                    label="Confirm"
                    placeholder="Confirm Password"
                    reducer={[reducerState, dispatch]}
                    style={styles.input}
                    secure={true}
                />
                <Input
                    label="Number"
                    placeholder="03XXXXXXXXX"
                    reducer={[reducerState, dispatch]}
                    style={styles.input}
                    secure={false}
                />
                <Input
                    label="Clinic"
                    placeholder="Clinic Name"
                    reducer={[reducerState, dispatch]}
                    style={styles.input}
                    secure={false}
                />
                <Input
                    label="About"
                    placeholder="About Clinic"
                    reducer={[reducerState, dispatch]}
                    style={styles.input}
                    secure={false}
                />
                <Picker
                    selectedValue={reducerState.City}
                    style={styles.input}
                    onValueChange={(itemValue, itemIndex) =>
                        dispatch({ type: "City", payload: itemValue })
                    }
                >
                    <Picker.Item label="--" value="" />
                    <Picker.Item label="Lahore" value="Lahore" />
                    <Picker.Item label="Karachi" value="Karachi" />
                    <Picker.Item label="Islamabad" value="Islamabad" />
                </Picker>
            </ScrollView>
            <ButtonComp
                text="Sign Up"
                style={styles.button}
                disabled={false}
                onChange={() =>
                    signupVet({
                        cnic: reducerState.CNIC,
                        email: reducerState.Email,
                        phone: reducerState.Number,
                        password: reducerState.Password,
                        clinic_location: reducerState.City,
                        clinic_name: reducerState.Clinic,
                        about_clinic: reducerState.About,
                        pvmc_reg,
                    })
                }
            />
        </View>
    );
};

ClinicSignUpScreen.navigationOptions = () => {
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
    input: {
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

export default ClinicSignUpScreen;
