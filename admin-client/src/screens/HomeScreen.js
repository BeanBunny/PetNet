import React, { useState, useEffect } from "react";
import { Card, Title, Headline, Paragraph, Button } from "react-native-paper";
import { View, StyleSheet, Alert, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import restApi from "../api/restApi";

const AcceptClinic = async (req, entireList, updateList) => {
  try {
    await restApi.post("/admin/accept-clinic", { user: req });
    const list = await restApi.get("/admin/sign-up-requests");
    updateList(list.data);
  } catch (err) {
    console.log(err);
  }
};
const RejectClinic = async (req, entireList, updateList) => {
  try {
    await restApi.post("/admin/reject-clinic", { user: req });
    updateList(entireList.splice(entireList.indexOf(req), 1));
  } catch (err) {
    console.log(err);
  }
};

const AcceptAlert = (req, entireList, updateList, navigation) => {
  Alert.alert("Are you sure you want to allow this Clinic?", "", [
    {
      text: "No",
      onPress: () => {},
      style: "cancel",
    },
    {
      text: "Yes",
      onPress: () => {
        AcceptClinic(req, entireList, updateList);
      },
    },
  ]);
};

const RejectAlert = (req, entireList, updateList) => {
  Alert.alert("Are you sure you want to reject this Clinic?", "", [
    {
      text: "No",
      onPress: () => {},
      style: "cancel",
    },
    {
      text: "Yes",
      onPress: () => RejectClinic(req, entireList, updateList),
    },
  ]);
};

const ClinicCard = ({ item, entireList, updateList, navigation }) => {
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
        <Button
          onPress={() => AcceptAlert(req, entireList, updateList, navigation)}
        >
          Accept
        </Button>
        <Button onPress={() => RejectAlert(req, entireList, updateList)}>
          {" "}
          Reject
        </Button>
      </Card.Actions>
    </Card>
  );
};

const HomeScreen = ({ route, navigation }) => {
  const userId = AsyncStorage.getItem("userId");
  const [listReq, setListReq] = useState([]);
  useEffect(async () => {
    const list = await restApi.get("/admin/sign-up-requests");
    setListReq(list.data);
    return () => {};
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Button
        onPress={async () => {
          const list = await restApi.get("/admin/sign-up-requests");
          setListReq(list.data);
        }}
      >
        Do you want to refresh your screen?
      </Button>
      <FlatList
        keyExtractor={(item) => item.email}
        data={listReq}
        renderItem={({ item }) => {
          return (
            <ClinicCard
              item={item}
              entireList={listReq}
              updateList={async () => {
                const list = await restApi.get("/admin/sign-up-requests");
                setListReq(list.data);
              }}
              navigation={navigation}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
