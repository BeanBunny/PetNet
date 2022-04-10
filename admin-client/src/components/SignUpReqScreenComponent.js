import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { Headline, Button, Card, Title, Paragraph } from "react-native-paper";
import restApi from "../api/restApi";

const SignUpReq = () => {
    const [listReq, setListReq] = useState([]);
    useEffect(async () => {
        const list = await restApi.get("/admin/sign-up-requests");
        setListReq(list.data);
        return () => {};
    }, []);
    return (
        <FlatList
            keyExtractor={(item) => item.email}
            data={listReq}
            renderItem={({ item }) => {
                const { cnic, email, phone, clinic_name, clinic_location, pvmc_reg } = item;
                return (
                    <Card>
                        <Card.Content>
                            <Title>Clinic Name: {clinic_name}</Title>
                            <Headline>Clinic Location: {JSON.stringify(clinic_location)}</Headline>
                            <Paragraph>CNIC {cnic}</Paragraph>
                            <Paragraph>Email: {email}</Paragraph>
                            <Paragraph>Phone Number {phone}</Paragraph>
                            <Paragraph>PVMC Registraion: {JSON.stringify(pvmc_reg)}</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button>Accept</Button>
                            <Button>Reject</Button>
                        </Card.Actions>
                    </Card>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({});

export default SignUpReq;
