import React, { useReducer } from "react";
import { StyleSheet, View, Text } from "react-native";
import CompButton from "../../components/Button";
import Input from "../../components/InputBox";
import TopBar from "../../components/TopBar";
import restApi from "../../api/restApi";
import { errorRequired } from "../../inputvalidation/validators";

const reducer = (state, action) => {
    switch (action.type) {
        case "Name":
            return { ...state, Name: action.payload };
        case "Phone":
            return { ...state, Phone: action.payload };
        case "Email":
            return { ...state, Email: action.payload };
        default:
            return state;
    }
};

const Editprofile = ({ route }) => {
    const [state, dispatch] = useReducer(reducer, {
        Name: "",
        Email: "",
        Phone: "",
    });
    const errName = errorRequired(state.Name);
    const errEmail = errorRequired(state.Email);
    const errPhone = errorRequired(state.Phone);

    return (
        <View>
            <TopBar
                text="Edit Profile"
                textStyle={styles.text}
                style={styles.bar}
            />
            <View style={styles.container}>
                <Input
                    label="Name"
                    placeholder="Name"
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
                    label="Email"
                    placeholder="example@gmail.com"
                    reducer={[state, dispatch]}
                    style={styles.input}
                    secure={false}
                />
            </View>
            {!(errEmail && errName && errPhone) ? (
                <CompButton
                    text="Save"
                    style={styles.button}
                    onChange={async () => {
                        try {
                            let resp = await restApi.post(
                                "/petowner/profile-customization/general",
                                {
                                    name: state.Name,
                                    phone: state.Phone,
                                    email: state.Email,
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
        marginLeft: "31%",
        color: "white",
        fontSize: 30,
    },
    bar: {
        backgroundColor: "#326273",
        marginTop: "5%",
    },
    container: {
        backgroundColor: "#324273",
        marginVertical: "10%",
        marginHorizontal: "10%",
        padding: "5%",
        borderRadius: 10,
    },
    input: {
        marginHorizontal: "15%",
        marginVertical: "5%",
    },
    button: {
        marginHorizontal: "20%",
        marginVertical: "10%",
    },
});

export default Editprofile;
