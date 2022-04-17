import React, { useContext, useEffect, useState } from "react";
import { Context as AuthContext } from "../../context/AuthContext";
import { View, StyleSheet, Text } from "react-native";
import { Headline, ActivityIndicator } from "react-native-paper";
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

const AccountScreen = ({ navigation }) => {
    const { signout } = useContext(AuthContext);
    const [profile, setProfile] = useState(null);

    useEffect(async () => {
        const resp = await restApi.get("/vet/get-details");
        console.log(resp.data);
        setProfile(resp.data);
    }, []);

    return (
        <View>
            {profile ? (
                <View>
                    <TopBar
                        textStyle={styles.text}
                        text={profile.clinic_name}
                        style={styles.bar}
                    />
                    <View style={{ flexDirection: "row", height: "20%" }}>
                        <Button
                            text="Edit Profile"
                            onChange={() =>
                                navigation.navigate("EditProfile", { profile })
                            }
                            style={{ margin: "2%", flex: 0.5, height: "50%" }}
                        />
                        <Button
                            text="Edit Services"
                            onChange={() => console.log("pressed")}
                            style={{ margin: "2%", flex: 0.5 }}
                        />
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.text2}>About Clinic </Text>
                        <View style={styles.input}>
                            <Text style={styles.text3}>
                                {profile.about_clinic}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.text2}>Services</Text>
                        <FlatListComponent
                            Child={serv}
                            list={profile.services}
                            vet_id={profile._id}
                            navigation={navigation}
                        />
                    </View>
                </View>
            ) : (
                <ActivityIndicator size="large" />
            )}
            <Button text="Logout" onChange={() => signout()} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: "7%",
        backgroundColor: "white",
    },
    container: {
        backgroundColor: "#EEEEEE",
        marginHorizontal: "5%",
        // marginTop: "10%",
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

export default AccountScreen;
