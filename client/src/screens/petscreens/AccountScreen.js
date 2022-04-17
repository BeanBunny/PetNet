import React, { useContext, useEffect, useState } from "react";
import { Context as AuthContext } from "../../context/AuthContext";
import { Context as PetContext } from "../../context/PetContext";
import { View, StyleSheet, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Button from "../../components/Button";
import restApi from "../../api/restApi";
import FlatListComponent from "../../components/FlatListComponent";
import TopBar from "../../components/TopBar";
import {
    Headline,
    ActivityIndicator,
    Button as PaperButton,
} from "react-native-paper";

const petfunc = ({ prop, navigation, vet_id }) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <View style={styles.minicontainer}>
                <Text style={styles.servtext}>{prop.petName}</Text>
                <Text style={styles.servtext}>{prop.petType}</Text>
            </View>
        </View>
    );
};

const AccountScreen = ({ navigation }) => {
    const { signout } = useContext(AuthContext);
    const { state, getDetails } = useContext(PetContext);

    // useFocusEffect(
    //     React.useCallback(() => {
    //         return () => getDetails();
    //     }, [])
    // );

    useEffect(() => {
        console.log("getting deets");
        getDetails();
    }, []);
    // console.log(state, "----------------------");
    return (
        <View style={{ flex: 1 }}>
            {state.profile ? (
                <View style={{ flex: 1 }}>
                    <TopBar
                        textStyle={styles.text}
                        text={`${state.profile.name}'s Profile`}
                        style={styles.bar}
                    />
                    <View
                        style={{
                            flexDirection: "row",
                            height: "20%",
                            flex: 0.5,
                        }}
                    >
                        <Button
                            text="Edit Profile"
                            onChange={() => navigation.navigate("EditProfile")}
                            style={{ margin: "2%", flex: 0.5, height: "50%" }}
                        />
                        <Button
                            text="Edit Pets"
                            onChange={() => navigation.navigate("EditPets")}
                            style={{ margin: "2%", flex: 0.5 }}
                        />
                    </View>
                    <View>
                        <Text style={styles.text2}>Pets</Text>
                        <FlatListComponent
                            Child={petfunc}
                            list={state.pets}
                            vet_id={state.profile._id}
                            navigation={navigation}
                        />
                    </View>
                </View>
            ) : null}
            <PaperButton
                style={{
                    backgroundColor: "red",
                    width: "50%",
                    marginHorizontal: "25%",
                    marginTop: "5%",
                }}
                onPress={() => signout()}
            >
                Logout
            </PaperButton>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        // margin: "7%",
        backgroundColor: "white",
    },
    container: {
        backgroundColor: "#EEEEEE",
        borderRadius: 10,
        justifyContent: "center",
    },
    minicontainer: {
        marginLeft: "5%",
        marginRight: "10%",
        backgroundColor: "#326273",
        marginVertical: "1%",
        borderRadius: 5,
        flex: 1,
        alignItems: "center",
    },
    text: {
        marginLeft: "25%",
        color: "white",
        fontSize: 30,
    },
    bar: {
        backgroundColor: "#326273",
        marginTop: "5%",
    },
    text2: {
        fontSize: 30,
        // marginTop: "30%",
        marginLeft: "6.5%",
        color: "#326273",
        fontWeight: "bold",
        alignItems: "center",
    },
    text3: {
        fontSize: 20,
        // marginTop: "30%",
        color: "#326273",
        // fontWeight: "bold",
        padding: "5%",
        alignItems: "center",
    },
    button: { marginHorizontal: "15%", marginTop: "10%" },
    button1: { marginLeft: "76%", marginTop: "-8%" },
    sbutton: { marginHorizontal: "5%", marginTop: "2%" },
    servtext: { fontSize: 20, color: "white" },
});

export default AccountScreen;
