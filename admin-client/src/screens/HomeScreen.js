import React, { useState, useEffect } from "react";
import { Card, Title, Headline, Paragraph, Button } from "react-native-paper";
import { View, StyleSheet, Alert, FlatList } from "react-native";
import restApi from "../api/restApi";

const AcceptClinic = async (req) => {
    await restApi.post("/ad");
};

const AcceptAlert = (req) => {
    Alert.alert("Are you sure you want to allow this Clinic?", "", [
        {
            text: "No",
            onPress: () => {},
            style: "cancel",
        },
        { text: "Yes", onPress: () => console.log("Ok pressed") },
    ]);
};
const RejectAlert = () => {
    Alert.alert("Are you sure you want to reject this Clinic?", "", [
        {
            text: "No",
            onPress: () => {},
            style: "cancel",
        },
        { text: "Yes", onPress: () => console.log("Ok pressed") },
    ]);
};

const ClinicCard = ({ item }) => {
    const [req, setReq] = useState(item);
    const { cnic, email, phone, clinic_name, clinic_location, pvmc_reg } = item;
    return (
        <Card>
            <Card.Content>
                <Headline>Clinic Name: {clinic_name}</Headline>
                <Title>{JSON.stringify(clinic_location)}</Title>
                <Paragraph>CNIC {cnic}</Paragraph>
                <Paragraph>Email: {email}</Paragraph>
                <Paragraph>Phone Number {phone}</Paragraph>
                <Paragraph>PVMC Registraion: {JSON.stringify(pvmc_reg)}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button onPress={() => AcceptAlert(req)}>Accept</Button>
                <Button onPress={RejectAlert}> Reject</Button>
            </Card.Actions>
        </Card>
    );
};

const HomeScreen = ({ route }) => {
    const { userId } = route.params;

    const [listReq, setListReq] = useState([]);
    useEffect(async () => {
        const list = await restApi.get("/admin/sign-up-requests");
        setListReq(list.data);
        return () => {};
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                keyExtractor={(item) => item.email}
                data={listReq}
                renderItem={({ item }) => {
                    return <ClinicCard item={item} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;
