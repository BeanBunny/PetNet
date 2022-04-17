import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import TopBar from "../../components/TopBar";
import Button from "../../components/Button";
import TextButton from "../../components/TextOnlyButton";
import FlatListComponent from "../../components/FlatListComponent";

const serv = ({ prop, navigation, vet_id }) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <View style={styles.minicontainer}>
                <Text style={styles.servtext}>{prop.service_name}</Text>
                <Text style={styles.servtext}>Rs. {prop.price}</Text>
            </View>
            <Button
                text="Make Appointment"
                style={{ marginVertical: "5%" }}
                onChange={() =>
                    navigation.navigate("AppDate", {
                        type: prop.service_name,
                        vet_id: vet_id,
                    })
                }
            />
        </View>
    );
};

const ClinicInfo = ({ route, navigation }) => {
    const clinicInfo = route.params.clinicInfo;
    const service = clinicInfo.services;
    return (
        <View>
            <TopBar
                textStyle={styles.text}
                text={clinicInfo.clinic_name}
                style={styles.bar}
            />
            <View style={styles.container}>
                <Text style={styles.text2}>About Clinic </Text>
                {/* <TextButton style={styles.button1} text="Report!" /> */}
                <View style={styles.input}>
                    <Text style={styles.text3}>{clinicInfo.about_clinic}</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.text2}>Services</Text>
                <FlatListComponent
                    Child={serv}
                    list={service}
                    vet_id={clinicInfo._id}
                    navigation={navigation}
                />
            </View>
        </View>
    );
};

ClinicInfo.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    input: {
        margin: "7%",
        backgroundColor: "white",
    },
    container: {
        backgroundColor: "#EEEEEE",
        marginHorizontal: "5%",
        marginTop: "10%",
        padding: "5%",
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

export default ClinicInfo;
