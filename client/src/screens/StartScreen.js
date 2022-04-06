import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ButtonComp from "../components/button";

const StartScreen = () => {
  return (
    <View>
      <Image style={styles.img} source={require("../../assets/Logo1.jpeg")} />
      <ButtonComp text="Pet Owner" style={styles.button1} />
      <View style={styles.line}></View>
      <ButtonComp text="Vet Clinic" style={styles.button2} />
    </View>
  );
};

StartScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  img: {
    justifyContent: "center",
    marginHorizontal: "10%",
    marginTop: "10%",
  },
  button1: {
    marginHorizontal: "20%",
    marginTop: "20%",
    marginBottom: "5%",
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 5,
    marginHorizontal: "5%",
    marginVertical: "10%",
  },
  button2: {
    marginHorizontal: "20%",
    marginTop: "5%",
  },
});

export default StartScreen;
