import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Provider, Card, Title, Paragraph, Button } from "react-native-paper";
import TopBar from "../../components/TopBar";
import FlatListComponent from "../../components/FlatListComponent";
import restApi from "../../api/restApi";
import { sendEmail } from "../../api/sendEmail";

const MyCard = ({ prop, updateList }) => {
    console.log("------->", prop);
    let time = prop.appointment_time[4];
    let date = prop.appointment_time.splice(0, 4).toString();
    return (
        <View style={styles.list}>
            <Card>
                <View style={styles.clinicNameView}>
                    <Title>Owner of Pet: {prop.petowner_name}</Title>
                </View>
                <View style={styles.dateStatusView}>
                    <Paragraph style={{ fontWeight: "bold" }}>
                        Appointment time:
                    </Paragraph>
                    <Paragraph style={{ flex: 1 }}>
                        {date} {time}
                    </Paragraph>
                </View>
                <View style={styles.dateStatusView}>
                    <Paragraph style={{ fontWeight: "bold" }}>
                        Pet Owner Phone:{" "}
                    </Paragraph>
                    <Paragraph>{prop.petowner_phone}</Paragraph>
                </View>
                <View style={styles.petNameView}>
                    <View>
                        <Paragraph>
                            Appointment request is for a {prop.petType} due for{" "}
                            {prop.appointment_type}{" "}
                        </Paragraph>
                    </View>
                </View>
                <Card.Actions>
                    <Button
                        onPress={async () => {
                            try {
                                const list = await restApi.post(
                                    "/vet/accept-appointment",
                                    {
                                        id: prop._id,
                                    }
                                );
                                console.log("accepted appointment");
                                const resp = await restApi.post(
                                    "/vet/get-appointments",
                                    {
                                        status: "pending",
                                    }
                                );
                                console.log("got newwww appointment");
                                updateList(resp.data);
                            } catch (err) {
                                console.log(err);
                            }
                        }}
                    >
                        Approve
                    </Button>
                    <Button
                        onPress={async () => {
                            try {
                                const list = await restApi.post(
                                    "/vet/reject-appointment",
                                    {
                                        id: prop._id,
                                    }
                                );
                                const resp = await restApi.post(
                                    "/vet/get-appointments",
                                    {
                                        status: "pending",
                                    }
                                );
                                updateList(resp.data);
                            } catch (err) {
                                console.log(err);
                            }
                        }}
                    >
                        Reject
                    </Button>
                </Card.Actions>
            </Card>
        </View>
    );
};

const HomeScreen = () => {
    const [pendingReq, setPendingReq] = useState([]);
    useEffect(async () => {
        try {
            const list = await restApi.post("/vet/get-appointments", {
                status: "pending",
            });
            setPendingReq(list.data);
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <Provider>
            <View>
                <TopBar
                    text="Pending Requests"
                    textStyle={styles.text}
                    style={styles.bar}
                />
                <View style={styles.bigcontainer}>
                    <FlatListComponent
                        Child={MyCard}
                        list={pendingReq}
                        updateList={async () => {
                            const list = await restApi.post(
                                "/vet/get-appointments",
                                {
                                    status: "pending",
                                }
                            );
                            setPendingReq(list.data);
                        }}
                    />
                </View>
            </View>
        </Provider>
    );
};

const styles = StyleSheet.create({
    text: {
        marginLeft: "31%",
        color: "white",
        fontSize: 30,
    },
    bar: {
        backgroundColor: "#326273",
        marginTop: "5%",
    },
    container: {
        backgroundColor: "#326273",
        // marginHorizontal: "5%",
        flexDirection: "row",
    },
    text2: { color: "white", fontSize: 15, marginHorizontal: "2%" },
    greenbox: {
        // borderRadius: 10,
        backgroundColor: "green",
    },
    redbox: {
        // borderRadius: 10,
        backgroundColor: "red",
    },
    bigcontainer: {
        backgroundColor: "#EEEEEE",
        // borderRadius: 10,
        marginHorizontal: "5%",
        marginVertical: "5%",
    },
    headingView: { alignItems: "center" },
    clinicNameView: {
        alignItems: "center",
        marginHorizontal: "2%",
    },
    dateStatusView: {
        flexDirection: "row",
        flex: 1,
        marginHorizontal: "2%",
    },
    petNameView: {
        flexDirection: "row",
        flex: 1,
        marginHorizontal: "2%",
    },
    list: {
        marginTop: "5%",
        marginHorizontal: "5%",
    },
});

export default HomeScreen;
