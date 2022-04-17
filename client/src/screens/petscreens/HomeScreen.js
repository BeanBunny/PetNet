import React, { useState, useEffect, useContext } from "react";
import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import {
    Provider,
    Card,
    Headline,
    ActivityIndicator,
} from "react-native-paper";
import restApi from "../../api/restApi";
import TopBar from "../../components/TopBar";
import Search from "../../components/SearchBar";
import FlatListComponent from "../../components/FlatListComponent";

const Mycard = ({ prop, navigation }) => {
    return (
        <View style={styles.list}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("ClinicInfo", { clinicInfo: prop });
                }}
            >
                <Card>
                    <Card.Cover
                        source={{
                            uri: prop.image_url,
                        }}
                    />
                    <Card.Title style={styles.image} title={prop.clinic_name} />
                    <Card.Actions />
                </Card>
            </TouchableOpacity>
        </View>
    );
};
const HomeScreen = ({ navigation }) => {
    const [queryRes, setQueryRes] = useState([]);
    const [resp, setResp] = useState("Loading");
    useEffect(async () => {
        const response = await restApi.get("/petowner/get-clinics");
        if (response.data.length === 0) setResp("No clinics in your city yet.");
        setQueryRes(response.data);
    }, []);

    return (
        <Provider>
            <TopBar textStyle={styles.text} style={styles.bar} text="Clinics" />
            <Search style={styles.input} />
            {queryRes.length !== 0 ? (
                <FlatListComponent
                    Child={Mycard}
                    list={queryRes}
                    navigation={navigation}
                />
            ) : (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        color: "#0000ff",
                    }}
                >
                    <ActivityIndicator size="large" />
                </View>
            )}
        </Provider>
    );
};

const styles = StyleSheet.create({
    input: {
        marginTop: "3%",
        marginHorizontal: "8%",
    },
    horiz: {
        height: 200,
        width: 300,
    },
    text: {
        marginLeft: "31%",
        color: "white",
        fontSize: 30,
    },
    bar: {
        backgroundColor: "#326273",
        marginTop: "5%",
    },
    image: {
        fontSize: 20,
    },
    list: {
        marginTop: "5%",
        marginHorizontal: "5%",
    },
});

export default HomeScreen;
