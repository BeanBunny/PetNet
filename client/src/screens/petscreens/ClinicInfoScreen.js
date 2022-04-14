import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import TopBar from "../components/TopBar";
import Button from "../components/Button";
import TextButton from "../components/TextOnlyButton";

const ClinicInfo = () => {
  return (
    <View>
      <TopBar
        textStyle={styles.text}
        text="<Name of Clinic>"
        style={styles.bar}
      />
      <View style={styles.container}>
        <Text style={styles.text2}>About Clinic </Text>
        <TextButton style={styles.button1} text="Report!" />
        <View style={styles.input}>
          <Text style={styles.text3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vitae lorem eget mauris ul{" "}
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.text2}>Services </Text>

        <View style={styles.input}></View>
        <ScrollView>
          <Button style={styles.sbutton} text="Grooming                  200" />
          <Button style={styles.sbutton} text="Vaccination             300" />
          <Button style={styles.sbutton} text="Deworming             400" />
        </ScrollView>
      </View>
      <Button style={styles.button} text="Set Appointment" />
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
});

export default ClinicInfo;
