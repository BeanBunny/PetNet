import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Input from "../components/inputbox";
import ButtomComp from "../components/button";

const LoginScreen = () => {
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
        <Text style={styles.forgor}>Forgot Password?</Text>
      </View>
      <ButtomComp text="Login" style={styles.button} />
    </View>
  );
};

LoginScreen.navigationOptions = () => {
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

export default LoginScreen;
