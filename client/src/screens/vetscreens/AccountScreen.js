import React, { useContext, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Context as AuthContext } from "../../context/AuthContext";
import { Context as VetContext } from "../../context/VetContext";
import { View, StyleSheet, Text } from "react-native";
import {
    Headline,
    ActivityIndicator,
    Button as PaperButton,
} from "react-native-paper";
import TopBar from "../../components/TopBar";
import Button from "../../components/Button";
import TextButton from "../../components/TextOnlyButton";
import FlatListComponent from "../../components/FlatListComponent";
import restApi from "../../api/restApi";

const serv = ({ prop, navigation, vet_id }) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <View style={styles.minicontainer}>
                <Text style={styles.servtext}>{prop.service_name}</Text>
                <Text style={styles.servtext}>Rs. {prop.price}</Text>
            </View>
        </View>
    );
};

const AccountScreen = ({ navigation }) => {
    const { signout } = useContext(AuthContext);
    const { state, getDetails } = useContext(VetContext);
    // useFocusEffect(
    //     React.useCallback(() => {
    //         return () => getDetails();
    //     }, [])
    // );

    useEffect(() => getDetails(), []);

    return (
        <>
            {state.profile ? (
                <View style={{ flex: 1 }}>
                    <TopBar
                        textStyle={styles.text}
                        text={state.profile.clinic_name}
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
                            onChange={() =>
                                navigation.navigate("EditProfile", {
                                    profile: state.profile,
                                })
                            }
                            style={{ margin: "2%", flex: 0.5, height: "50%" }}
                        />
                        <Button
                            text="Edit Services"
                            onChange={() => navigation.navigate("EditServ")}
                            style={{ margin: "2%", flex: 0.5 }}
                        />
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.text2}>About Clinic </Text>
                        <View style={styles.input}>
                            <Text style={styles.text3}>
                                {state.profile.about_clinic}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.text2}>Services</Text>
                        <FlatListComponent
                            Child={serv}
                            list={state.services}
                            vet_id={state.profile._id}
                            navigation={navigation}
                        />
                    </View>
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
            ) : (
                <ActivityIndicator size="large" />
            )}
        </>
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
