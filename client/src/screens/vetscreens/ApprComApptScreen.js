import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Provider, Title, Paragraph, Button } from "react-native-paper";
import TopBar from "../../components/TopBar";
import FlatListComponent from "../../components/FlatListComponent";
import restApi from "../../api/restApi";
// import Button from "../../components/Button";

const MyCard = ({ prop, updateList }) => {
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
                                    "/vet/complete-appointment",
                                    {
                                        id: prop._id,
                                    }
                                );
                                updateList();
                            } catch (err) {
                                console.log(err);
                            }
                        }}
                    >
                        Complete Appointment
                    </Button>
                </Card.Actions>
            </Card>
        </View>
    );
};

const MyCard2 = ({ prop, updateList }) => {
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
            </Card>
        </View>
    );
};

const HistoryScreen = ({ navigation }) => {
    const [currentAppointments, setCurrentAppointments] = useState([]);
    const [completedAppointments, setCompletedAppointments] = useState([]);
    const [currentAppointmentsHeading, setCurrentAppointmentsHeading] =
        useState("Approved Appointments");
    const [completedAppointmentsHeading, setCompletedAppointmentsHeading] =
        useState("Completed Appointments");

    const updateLists = async () => {
        const approvedResponse = await restApi.post("/vet/get-appointments", {
            status: "approved",
        });
        const completedResponse = await restApi.post("/vet/get-appointments", {
            status: "completed",
        });
        const currentAppointments = approvedResponse.data;
        const pastAppointments = completedResponse.data;

        currentAppointments.length === 0
            ? setCurrentAppointmentsHeading("No Approved Appointments to show")
            : setCurrentAppointmentsHeading("Approved Appointments");
        pastAppointments.length === 0
            ? setCompletedAppointmentsHeading(
                  "No completed Appointments to show"
              )
            : setCompletedAppointmentsHeading("Completed Appointments");

        setCurrentAppointments(currentAppointments);
        setCompletedAppointments(pastAppointments);
    };

    useEffect(() => {
        updateLists();
    }, []);
    return (
        <Provider>
            <TopBar
                textStyle={styles.text}
                style={styles.bar}
                text="Appointments"
            />
            <View style={{ flex: 0.1, marginTop: "2%" }}>
                <Button
                    onPress={async () => {
                        updateLists();
                    }}
                >
                    Click to refresh
                </Button>
            </View>
            <View style={styles.headingView}>
                <Title>{currentAppointmentsHeading}</Title>
            </View>
            {currentAppointments.length != 0 ? (
                <View
                    style={
                        completedAppointments.length === 0
                            ? styles.FlatListView2
                            : styles.currAppView
                    }
                >
                    <FlatListComponent
                        Child={MyCard}
                        list={currentAppointments}
                        updateList={() => {
                            updateLists();
                        }}
                    />
                </View>
            ) : null}
            <View style={styles.headingView}>
                <Title>{completedAppointmentsHeading}</Title>
            </View>

            {completedAppointments.length != 0 ? (
                <View
                    style={
                        currentAppointments.length === 0
                            ? styles.FlatListView2
                            : styles.pastAppView
                    }
                >
                    <FlatListComponent
                        Child={MyCard2}
                        list={completedAppointments}
                    />
                </View>
            ) : null}
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
    list: {
        marginTop: "5%",
        marginHorizontal: "5%",
    },
    currAppView: { flex: 0.6, backgroundColor: "#326273", margin: "5%" },
    pastAppView: { flex: 0.3, backgroundColor: "#326273", margin: "5%" },
    FlatListView2: { flex: 0.9, backgroundColor: "#326273", margin: "5%" },
    headingView: { alignItems: "center" },
    clinicNameView: {
        alignItems: "center",
    },
    dateStatusView: {
        flexDirection: "row",
        flex: 1,
    },
    petNameView: { flexDirection: "row", flex: 1 },
    pendingStatus: { color: "tomato" },
    approvedStatus: { color: "green" },
    completedStatus: { color: "blue" },
});
export default HistoryScreen;
