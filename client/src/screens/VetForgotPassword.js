import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Input from "../components/inputbox";
import ButtomComp from "../components/button";
import Textbutton from "../components/TextOnlyButton";
import AlertButton from "../components/AlertButton";

// name, phone number, email, password, confirm password
const VetForgotPassword = () => {
  return (
    <View>
      <Image style={styles.img} source={require("../../assets/Logo1.jpeg")} />
      <View style={styles.container}>
        <Input
          text="Phone Number"
          text2="03XX-XXX-XXXX"
          style={styles.input1}
          secure={false}
        />
        <Input
          text="Email Address"
          text2="example@xyz.com"
          style={styles.input2}
          secure={false}
        />
      </View>
      <AlertButton
        style={styles.button}
        text="Send OTP"
        route="VetOTP"
        alertText1="An OTP has been generated"
        alertText2="Access it on your email or phone number"
        alertText3="Enter OTP"
      />
    </View>
  );
};

VetForgotPassword.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  img: {
    justifyContent: "center",
    resizeMode: "contain",
    height: "30%",
    marginHorizontal: "10%",
    marginTop: "10%",
  },
  input1: {
    marginHorizontal: "5%",
    marginVertical: "2%",
  },
  input2: {
    marginHorizontal: "5%",
    marginVertical: "5%",
    marginTop: 5,
  },
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    height: "30%",
    // width: "100%",
    marginTop: "20%",
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

export default VetForgotPassword;
