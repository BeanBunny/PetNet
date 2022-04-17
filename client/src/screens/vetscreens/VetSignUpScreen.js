import React, { useContext, useReducer } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Input from "../../components/InputBox";
import ButtonComp from "../../components/Button";
import { Context as AuthContext } from "../../context/AuthContext";
import ErrorTextComponent from "../../components/ErrorTextComponent";
import {
    errorEmail,
    errorNumber,
    errorRequired,
    errorName,
    errorEqual,
    errorPVMC,
} from "../../inputvalidation/validators";

const reducer = (state, action) => {
    switch (action.type) {
        case "Name":
            return { ...state, Name: action.payload };
        case "PVMC":
            return { ...state, PVMC: action.payload };
        case "Gender":
            return { ...state, Gender: action.payload };
        case "Father":
            return { ...state, Father: action.payload };
        default:
            return state;
    }
};

const VetSignUpScreen = ({ navigation }) => {
    const [reducerState, dispatch] = useReducer(reducer, {
        Name: "",
        PVMC: "",
        Gender: "",
        Father: "",
    });
    const errorMsgPVMC = errorPVMC(reducerState.PVMC);
    const errorMsgName = errorName(reducerState.Name);
    const errorMsgGender = errorRequired(reducerState.Gender, "Gender");
    const errorMsgFather = errorRequired(reducerState.Father, "Father");
    const { state, signupVet } = useContext(AuthContext);
    return (
        <View style={{ flex: 1 }}>
            <Image style={styles.img} source={require("../../../assets/Logo1.png")} />
            <ScrollView style={styles.container}>
                <Input
                    label="Name"
                    placeholder="Full Name"
                    reducer={[reducerState, dispatch]}
                    style={styles.input}
                    secure={false}
                />
                {errorMsgName != null ? <ErrorTextComponent error={errorMsgName} /> : null}
                <Input
                    label="PVMC"
                    placeholder="PVMC Registration Number"
                    reducer={[reducerState, dispatch]}
                    style={styles.input}
                    secure={false}
                />
                {errorMsgPVMC != null ? <ErrorTextComponent error={errorMsgPVMC} /> : null}
                <Picker
                    selectedValue={reducerState.Gender}
                    style={styles.input}
                    onValueChange={(itemValue, itemIndex) =>
                        dispatch({ type: "Gender", payload: itemValue })
                    }
                >
                    <Picker.Item label="Gender" value="" />
                    <Picker.Item label="Male" value="M" />
                    <Picker.Item label="Female" value="F" />
                </Picker>
                {errorMsgGender != null ? <ErrorTextComponent error={errorMsgGender} /> : null}
                <Input
                    label="Father"
                    placeholder="Father's Name"
                    reducer={[reducerState, dispatch]}
                    style={styles.input}
                    secure={false}
                />
                {errorMsgFather != null ? <ErrorTextComponent error={errorMsgFather} /> : null}
            </ScrollView>
            {errorMsgFather || errorMsgName || errorMsgGender || errorMsgPVMC ? (
                <ButtonComp text="Continue" style={styles.button} disabled />
            ) : (
                <ButtonComp
                    text="Continue"
                    style={styles.button}
                    disabled={false}
                    onChange={() =>
                        navigation.navigate("clinicSignUp", {
                            pvmc_reg: {
                                name: reducerState.Name,
                                gender: reducerState.Gender,
                                reg_num: reducerState.PVMC,
                                father_name: reducerState.Father,
                            },
                            isVet: state.isVet,
                        })
                    }
                />
            )}
        </View>
    );
};

VetSignUpScreen.navigationOptions = () => {
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

export default VetSignUpScreen;
