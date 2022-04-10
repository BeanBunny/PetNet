import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Input from "../components/inputbox";
import ButtomComp from "../components/button";
import Textbutton from "../components/TextOnlyButton";
import AlertButton from "../components/AlertButton";

// name, phone number, email, password, confirm password
const SignUpScreen = () => {
  return (
    <View>
      <Image style={styles.img} source={require("../../assets/Logo1.jpeg")} />
      <View style={styles.container}>
        <Input
          text="Name"
          text2="Sarah Dar"
          style={styles.input1}
          secure={false}
        />
        <Input
          text="Phone Number"
          text2="03XX-XXX-XXXX"
          style={styles.input1}
          secure={false}
        />
        <Input
          text="Email Address"
          text2="example@xyz.com"
          style={styles.input1}
          secure={false}
        />
        <Input
          text="Password"
          text2="Password"
          style={styles.input1}
          secure={true}
        />
        <Input
          text="Confirm Password"
          text2="Confirm Password"
          style={styles.input1}
          secure={true}
        />
      </View>
      <AlertButton
        style={styles.button}
        text="Sign Up"
        route="Login"
        alertText1="Your account has been created!"
        alertText2="Login to get started!"
        alertText3="Account Created! Login to Continue"
      />
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  img: {
    justifyContent: "center",
    resizeMode: "contain",
    height: "15%",
    marginHorizontal: "10%",
    marginTop: "10%",
  },
  input1: {
    marginHorizontal: "4%",
    marginVertical: "5%",
    height: 20,
    width: 277,
  },
  input2: {
    marginHorizontal: "15%",
    marginVertical: "5%",
  },
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    height: "63%",
    // width: "100%",
    marginTop: "5%",
    marginHorizontal: "10%",
  },
  forgor: {
    color: "blue",
    marginLeft: "60%",
  },
  button: {
    marginTop: "5%",
    marginHorizontal: "15%",
  },
});

export default SignUpScreen;
