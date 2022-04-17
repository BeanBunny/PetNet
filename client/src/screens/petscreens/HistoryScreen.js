import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Provider, Title, Paragraph } from "react-native-paper";
import TopBar from "../../components/TopBar";
import FlatListComponent from "../../components/FlatListComponent";
import restApi from "../../api/restApi";
import Button from "../../components/Button";
const Mycard = ({ prop }) => {
  const { clinicName, date, petName, status, type } = prop;
  const [day, month, date2, year, time] = date;
  let styleStatus =
    status === "approved"
      ? styles.approvedStatus
      : status === "pending"
      ? styles.pendingStatus
      : styles.completedStatus;
  return (
    <View style={styles.list}>
      <TouchableOpacity onPress={() => {}}>
        <Card>
          <View style={styles.clinicNameView}>
            <Title>{clinicName}</Title>
          </View>
          <View style={styles.dateStatusView}>
            <Paragraph>Appointment time:</Paragraph>
            <Paragraph style={{ flex: 1 }}>
              {date2} {month} {time}
            </Paragraph>
          </View>
          <View style={styles.dateStatusView}>
            <Paragraph>Status: </Paragraph>
            <Paragraph style={styleStatus}>{status}</Paragraph>
          </View>
          <View style={styles.petNameView}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Paragraph>
                Your Appointment is set for {petName} due to {type}{" "}
              </Paragraph>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

const HistoryScreen = ({ navigation }) => {
  const [currentAppointments, setCurrentAppointments] = useState([]);
  const [completedAppointments, setCompletedAppointments] = useState([]);
  const [currentAppointmentsHeading, setCurrentAppointmentsHeading] = useState(
    "Current Appointments"
  );
  const [completedAppointmentsHeading, setCompletedAppointmentsHeading] =
    useState("Completed Appointments");

  useEffect(async () => {
    const response = await restApi.get("/petowner/past-appointments");
    const { finalList } = response.data;
    let [currentAppointments, pastAppointments] = finalList;

    currentAppointments.length === 0
      ? setCurrentAppointmentsHeading("No current Appointments to show")
      : setCurrentAppointmentsHeading("Current Appointments");
    pastAppointments.length === 0
      ? setCompletedAppointmentsHeading("No completed Appointments to show")
      : setCompletedAppointmentsHeading("Completed Appointments");

    setCurrentAppointments(currentAppointments);
    setCompletedAppointments(pastAppointments);
  }, []);
  return (
    <Provider>
      <TopBar textStyle={styles.text} style={styles.bar} text="History" />
      <View style={{ flex: 0.2, marginTop: "2%" }}>
        <Button
          text="Click to refresh"
          onChange={async () => {
            console.log("CALL FOCUS TIME");
            const response = await restApi.get("/petowner/past-appointments");
            const { finalList } = response.data;
            let [currentAppointments, pastAppointments] = finalList;
            currentAppointments.length === 0
              ? setCurrentAppointmentsHeading("No current Appointments to show")
              : setCurrentAppointmentsHeading("Current Appointments");
            pastAppointments.length === 0
              ? setCompletedAppointmentsHeading(
                  "No completed Appointments to show"
                )
              : setCompletedAppointmentsHeading("Completed Appointments");

            setCurrentAppointments(currentAppointments);
            setCompletedAppointments(pastAppointments);
          }}
        />
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
          <FlatListComponent Child={Mycard} list={currentAppointments} />
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
          <FlatListComponent Child={Mycard} list={completedAppointments} />
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
    backgroundColor: "rgba(67, 105, 219, 0.8)",
    marginTop: "5%",
  },
  list: {
    marginTop: "5%",
    marginHorizontal: "5%",
  },
  currAppView: { flex: 0.5, backgroundColor: "#326273", margin: "5%" },
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
