import React, { useState, useEffect, useContext } from "react";
import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import { Provider, Card, Headline } from "react-native-paper";
import restApi from "../../api/restApi";
import { Context as AuthContext } from "../../context/AuthContext";
import TopBar from "../../components/TopBar";
import Search from "../../components/SearchBar";

const HomeScreen = () => {
    const { state } = useContext(AuthContext);
    const [queryRes, setQueryRes] = useState([]);
    const [resp, setResp] = useState("Loading");
    useEffect(async () => {
        const id = state.UserId;
        const response = await restApi.post("/petowner/get-clinics", { id });
        setQueryRes(response.data);
        if (response.data.length === 0)
            setResp("No clinics in your city. Sorry paaein");
    }, []);

    return (
        <Provider>
            <TopBar textStyle={styles.text} style={styles.bar} text="Clinics" />
            <Search style={styles.input} />
            {queryRes.length != 0 ? (
                <FlatList
                    style={{ marginTop: "2%" }}
                    keyExtractor={(x) => x._id}
                    data={queryRes}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <Mycard prop={item} />
                            </View>
                        );
                    }}
                />
            ) : (
                <Headline>{resp}</Headline>
            )}
        </Provider>
    );
};

const Mycard = ({ prop }) => {
    return (
        <View style={styles.list}>
            <TouchableOpacity onPress={() => {}}>
                <Card>
                    <Card.Cover source={{ uri: prop.image_url }} />
                    <Card.Title style={styles.image} title={prop.clinic_name} />
                    <Card.Actions />
                </Card>
            </TouchableOpacity>
        </View>
    );
};

HomeScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
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
