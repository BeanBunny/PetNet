import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Input from "../components/inputbox";
import ButtomComp from "../components/button";
import Textbutton from "../components/TextOnlyButton";

const VetLoginScreen = () => {
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
          text="Password"
          text2="Password"
          style={styles.input2}
          secure={true}
        />
        <Textbutton
          text="Forgot Password?"
          margin_left="38%"
          routeName="ForgotPassword"
        />
      </View>
      <ButtomComp text="Login" style={styles.button} />
      <View>
        <Text style={{ marginLeft: "24%", fontSize: 16, marginTop: "3%" }}>
          Don't have an account? </Text>     
      </View>
      <View>
      <Textbutton text="Sign Up" margin_left={220} routeName="Signup" />
      </View>
    </View>
  );
};

VetLoginScreen.navigationOptions = () => {
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
    marginTop: "15%",
  },
  input1: {
    marginHorizontal: "15%",
    marginVertical: "5%",
  },
  input2: {
    marginHorizontal: "15%",
    marginVertical: "5%",
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

export default VetLoginScreen;
