import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Input from "../components/inputbox";
import ButtomComp from "../components/button";
import Textbutton from "../components/TextOnlyButton";
import AlertButton from "../components/AlertButton";

// name, phone number, email, password, confirm password
const VetOTP = () => {
  return (
    <View>
    
      <Image style={styles.img} source={require("../../assets/Logo1.jpeg")} />
      <View style={styles.container}>
        <Input
          text="Enter OTP"
          text2="123xy"
          style={styles.input1}
          secure={false}
        />
      </View>
      <AlertButton
        style={styles.button}
        text="Submit"
        route="CreatePassword"
        alertText1="OTP Successfully Entered"
        // alertText2="Access it on your email or phone number"
        alertText3="Enter New Password"
      />
    </View>
  );
};

VetOTP.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  img: {
    justifyContent: "center",
    resizeMode: "contain",
    height: "50%",
    marginHorizontal: "10%",
    marginTop: "10%",
  },
  input1: {
    marginHorizontal: "15%",
    marginVertical: "5%",
    marginTop: 5,
  },
  input2: {
    marginHorizontal: "15%",
    marginVertical: "5%",
  },
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    height: "13%",
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

export default VetOTP;
