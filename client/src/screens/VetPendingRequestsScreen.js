import ButtomComp from "../components/button";
import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import TopBar from "../components/TopBar";
import TextButton from "../components/Textonlybutton";
import ServicesButton from "../components/ServicesButton";
import BackgroundButton from "../components/ButtonWithGivenColour";

var array = new Array();
var twodarray = new Array();
array.push("Buddy");
array.push("Deworming");
array.push("Dog");
array.push("SarahDar");
twodarray.push(array);

function VetPendAppointments() {
  return (
    <View>
      <TopBar
        textStyle={styles.text}
        text="Pending Requests"
        style={styles.bar}
      />
      <View style={{ flexDirection: "row" }}>
        <BackgroundButton
          style={styles.buttonContainerGreen}
          text="   Accept All"
        />
        <BackgroundButton style={styles.buttonContainerRed} text="Reject All" />
      </View>
      <View style={styles.container}>
        <View style={styles.container1}>
          <Image
            style={styles.container}
            source={require("../../assets/buddy.png")}
          />
          <Text style={styles.baseText}>{twodarray[0][0]}</Text>
        </View>
        <Text style={styles.baseText}>
          {twodarray[0][0]} for {twodarray[0][1]} {"\n"}
          {twodarray[0][2]} owned by {twodarray[0][3]}
        </Text>
      </View>
    </View>
  );
}

VetPendAppointments.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  baseText: {
    fontSize: 20,
    fontFamily: "Helvetica",
    color: "white",
    fontWeight: "bold",
  },
  container: {
    width: "85%",
    marginTop: "10%",
    marginBottom: "10%",
    marginLeft: "7%",
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "blue",
  },
  container1: {
    width: "24%",
    marginTop: "7%",
    marginBottom: "10%",
    marginLeft: "7%",
    backgroundColor: "#326273",
    borderRadius: 5,
    padding: "2%",
  },
  imageformatting: {
    marginLeft: "10%",
  },
  buttonContainerGreen: {
    backgroundColor: "green",
    padding: "5%",
    borderRadius: 20,
    width: "40%",
    marginTop: "15%",
    marginLeft: "5%",
    height: "55%",
  },
  buttonContainerRed: {
    backgroundColor: "#B22222",
    padding: "5%",
    borderRadius: 20,
    alignItems: "center",
    width: "40%",
    marginTop: "15%",
    marginLeft: "8%",
    height: "55%",
  },
});

export default VetPendAppointments;
