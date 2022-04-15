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
array.push("Sarah Dar");
array.push("08:00");
array.push("Thursday");
array.push("7th April 2022");
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
        <ButtomComp style={styles.buttonContainerGreen} text="   Accept All" />
        <ButtomComp style={styles.buttonContainerRed} text="Reject All" />
      </View>
      <View style={styles.container}>
        <View style={styles.container2}>
          <View style={styles.container3}>
            <Text style={styles.baseText2}>{twodarray[0][2]}</Text>
            <Text style={styles.baseText3}>for </Text>
            <Text style={styles.baseText4}>{twodarray[0][1]}</Text>
          </View>
          <View style={styles.container1}>
            <Image
              style={styles.imageformatting}
              source={require("../../assets/buddy.png")}
            />
            <Text style={styles.baseText}>{twodarray[0][0]}</Text>
          </View>
          <Text style={styles.baseText1}>Owned by: {twodarray[0][3]}</Text>
        </View>
        <Text style={styles.timetext}>{twodarray[0][4]}</Text>
        <Text style={styles.day}>{twodarray[0][5]}</Text>
        <Text style={styles.date}>{twodarray[0][6]}</Text>
        <ButtomComp style={styles.singleAcceptGreen} />
        <Image
          style={styles.imageformattingtick}
          source={require("../../assets/tick.png")}
        />
        <ButtomComp style={styles.singleAcceptRed} />
        <Image
          style={styles.imageformattingcross}
          source={require("../../assets/cross.png")}
        />
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
    marginLeft: "13%",
    marginTop: "2%",
  },
  timetext: {
    fontSize: 30,
    fontFamily: "Helvetica",
    color: "#326273",
    fontWeight: "bold",
    marginLeft: "57%",
    marginTop: "-44%",
  },
  day: {
    fontSize: 13,
    fontFamily: "Helvetica",
    color: "#326273",
    fontWeight: "bold",
    marginLeft: "57%",
    marginTop: "17%",
  },
  date: {
    fontSize: 13,
    fontFamily: "Helvetica",
    color: "#326273",
    fontWeight: "bold",
    marginLeft: "57%",
    marginTop: "0%",
  },
  baseText1: {
    fontSize: 15,
    marginLeft: "4.5%",
    marginTop: "3%",
    fontFamily: "Helvetica",
    color: "white",
    fontWeight: "bold",
  },
  baseText2: {
    fontSize: 15,
    marginLeft: "40%",
    marginTop: "25%",
    fontFamily: "Helvetica",
    color: "white",
    fontWeight: "bold",
  },
  baseText3: {
    fontSize: 15,
    marginLeft: "45%",
    marginTop: "5%",
    fontFamily: "Helvetica",
    color: "white",
  },
  baseText4: {
    fontSize: 15,
    marginLeft: "10.5%",
    marginTop: "5%",
    fontFamily: "Helvetica",
    color: "white",
    fontWeight: "bold",
  },
  container: {
    width: "85%",
    height: "30%",
    marginTop: "10%",
    marginBottom: "10%",
    marginLeft: "7%",
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "blue",
  },
  container1: {
    backgroundColor: "#326273",
    marginTop: "-59%",
    borderRadius: 5,
    width: "50%",
    height: "80%",
  },
  container3: {
    backgroundColor: "#E39774",
    width: "56%",
    height: "80%",
    borderRadius: 5,
    marginLeft: "44%",
  },
  container2: {
    width: "50%",
    height: "80%",
    marginTop: "5%",
    marginBottom: "7%",
    marginLeft: "3%",
    backgroundColor: "#66C4D2",
    borderRadius: 5,
  },
  imageformatting: {
    height: "60%",
    marginLeft: "20%",
    marginTop: "13%",
  },
  imageformattingtick: {
    height: "100%",
    resizeMode: "contain",
    marginLeft: "77%",
    marginTop: "-34%",
  },
  imageformattingcross: {
    height: "100%",
    resizeMode: "contain",
    marginLeft: "78%",
    marginTop: "-36%",
  },
  singleAcceptGreen: {
    backgroundColor: "green",
    width: "17%",
    height: "54.5%",
    borderRadius: 5,
    marginLeft: "83%",
    marginTop: "-41.5%",
  },
  singleAcceptRed: {
    backgroundColor: "red",
    width: "17%",
    height: "50%",
    borderRadius: 5,
    marginLeft: "83%",
    marginTop: "-14%",
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
