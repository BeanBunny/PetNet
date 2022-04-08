import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Input from "../components/inputbox";
import AlertButton from "../components/AlertButton";

// name, phone number, email, password, confirm password
const CreatePassword = () => {
  return (
    <View>
      <Image style={styles.img} source={require("../../assets/Logo1.jpeg")} />
      <View style={styles.container}>
        <Input
          text="New Password"
          text2="New Password"
          style={styles.input2}
          secure={true}
        />
        <Input
          text="Confirm Password"
          text2="Confirm Password"
          style={styles.input2}
          secure={true}
        />
      </View>
      <AlertButton
        style={styles.button}
        text="Confirm"
        route="Login"
        alertText1="Your new password has been created"
        alertText2="Login with your new password to continue"
        alertText3="Login!"
      />
    </View>
  );
};

CreatePassword.navigationOptions = () => {
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

export default CreatePassword;
