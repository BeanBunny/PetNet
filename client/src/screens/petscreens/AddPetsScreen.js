import React, { useContext, useReducer } from "react";
import { View, StyleSheet, Text } from "react-native";
import TopBar from "../../components/TopBar";
import CompButton from "../../components/Button";
import Input from "../../components/InputBox";
import { Picker } from "@react-native-picker/picker";
import restApi from "../../api/restApi";
import { errorRequired } from "../../inputvalidation/validators";
import { Context as PetContext } from "../../context/PetContext";

const reducer = (state, action) => {
    switch (action.type) {
        case "Name":
            return { ...state, Name: action.payload };
        case "Type":
            return { ...state, Type: action.payload };
        default:
            return state;
    }
};

const AddPetsScreen = ({ navigation }) => {
    const [reducerState, dispatch] = useReducer(reducer, {
        Name: "",
        Type: "",
    });
    const errName = errorRequired(reducerState.Name);
    const errType = errorRequired(reducerState.Type);
    const { state, addPet } = useContext(PetContext);
    return (
        <View>
            <TopBar text="Add Pet" textStyle={styles.text} style={styles.bar} />
            <View style={styles.container}>
                <Input
                    label="Name"
                    placeholder="Pet Name"
                    reducer={[reducerState, dispatch]}
                    style={styles.input}
                    secure={false}
                />
                <Picker
                    selectedValue={reducerState.Type}
                    style={styles.input}
                    onValueChange={(itemValue, itemIndex) =>
                        dispatch({ type: "Type", payload: itemValue })
                    }
                >
                    <Picker.Item label="--" value="" />
                    <Picker.Item label="Cat" value="Cat" />
                    <Picker.Item label="Dog" value="Dog" />
                    <Picker.Item label="Bird" value="Bird" />
                    <Picker.Item label="Other" value="Other" />
                </Picker>
            </View>
            {!(errName && errType) ? (
                <CompButton
                    text="Add Pet"
                    style={styles.addbutton}
                    onChange={async () =>
                        addPet({
                            name: reducerState.Name,
                            type: reducerState.Type,
                        })
                    }
                />
            ) : null}
        </View>
    );
};

AddPetsScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
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
        backgroundColor: "white",
        marginVertical: "5%",
    },

    container: {
        backgroundColor: "#326273",
        marginHorizontal: "5%",
        marginTop: "10%",
        padding: "5%",
        borderRadius: 10,
        justifyContent: "center",
    },
    addbutton: {
        marginTop: "5%",
        marginHorizontal: "30%",
    },
});

export default AddPetsScreen;
