import React, { useReducer } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Input from "../../components/InputBox";
import Button from "../../components/Button";
import TopBar from "../../components/TopBar";
import restApi from "../../api/restApi";
import { errorRequired } from "../../inputvalidation/validators";

const reducer = (state, action) => {
    switch (action.type) {
        case "Email":
            return { ...state, Email: action.payload };
        case "Phone":
            return { ...state, Phone: action.payload };
        case "About":
            return { ...state, About: action.payload };
        default:
            return state;
    }
};

const Edit = ({ route }) => {
    const [state, dispatch] = useReducer(reducer, {
        Email: "",
        Phone: "",
        About: "",
    });

    const errEmail = errorRequired(state.Email);
    const errPhone = errorRequired(state.Phone);
    const errAbout = errorRequired(state.About);
    return (
        <View>
            <TopBar
                style={styles.bar}
                textStyle={styles.text}
                text="Edit Clinic Profile"
            />
            <ScrollView style={styles.container}>
                <Input
                    label="Email"
                    placeholder="example@gmail.com"
                    reducer={[state, dispatch]}
                    style={styles.input}
                    secure={false}
                />
                <Input
                    label="Phone"
                    placeholder="03XX-XXXX-XXX"
                    reducer={[state, dispatch]}
                    style={styles.input}
                    secure={false}
                />
                <Input
                    label="About"
                    placeholder="Clinic Description"
                    reducer={[state, dispatch]}
                    style={styles.input}
                    secure={false}
                />
            </ScrollView>
            {!(errAbout && errPhone && errEmail) ? (
                <Button
                    text="Save"
                    style={styles.button}
                    onChange={async () => {
                        try {
                            let resp = await restApi.post(
                                "/vet/edit-clinic-profile",
                                {
                                    phone: state.Phone,
                                    email: state.Email,
                                    about: state.About,
                                }
                            );
                        } catch (err) {
                            console.log(err);
                        }
                    }}
                />
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        marginLeft: "25%",
        color: "white",
        fontSize: 30,
    },
    bar: {
        backgroundColor: "#326273",
        marginTop: "5%",
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
        marginHorizontal: "20%",
    },
});

export default Edit;
