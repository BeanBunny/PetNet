import React, { useReducer, useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import TopBar from "../../components/TopBar";
import Input from "../../components/InputBox";
import CompButton from "../../components/Button";
import { Context as VetContext } from "../../context/VetContext";
import restApi from "../../api/restApi";

const reducer = (state, action) => {
    switch (action.type) {
        case "Name":
            return { ...state, Name: action.payload };
        case "Cost":
            return { ...state, Cost: action.payload };
        default:
            return state;
    }
};

const Addserv = ({ navigation }) => {
    const [reducerState, dispatch] = useReducer(reducer, {
        Name: "",
        Cost: "",
    });
    const { state, addService, getDetails } = useContext(VetContext);
    return (
        <View>
            <TopBar
                style={styles.bar}
                text="Add Service"
                textStyle={styles.text}
            />
            <View style={styles.container}>
                <Input
                    label="Name"
                    placeholder="Name"
                    reducer={[reducerState, dispatch]}
                    style={styles.input}
                    secure={false}
                />
                <Input
                    label="Cost"
                    placeholder="Cost"
                    reducer={[reducerState, dispatch]}
                    style={styles.input}
                    secure={false}
                />
            </View>
            <CompButton
                text="Add"
                style={styles.addbutton}
                onChange={() =>
                    addService({
                        service_name: reducerState.Name,
                        price: reducerState.Cost,
                    })
                }
            />
        </View>
    );
};

Addserv.navigationOptions = () => {
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

export default Addserv;
