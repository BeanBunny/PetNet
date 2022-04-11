import React, { useReducer } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Input from "../../components/InputBox";
import AlertButton from "../../components/AlertButton";

const reducer = (state, action) => {
  switch (action.type) {
    case "Name":
      return { ...state, Name: action.payload };
    case "Email":
      return { ...state, Email: action.payload };
    case "Number":
      return { ...state, Number: action.payload };
    case "Password":
      return { ...state, Password: action.payload };
    case "Confirm":
      return { ...state, Confirm: action.payload };
    case "Pet":
      return { ...state, Pet: action.payload };
    case "Type":
      return { ...state, Type: action.payload };
    default:
      return state;
  }
};

// name, phone number, email, password, confirm password
const SignUpScreen = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, {
    Name: "",
    Email: "",
    Number: "",
    Password: "",
    Confirm: "",
    Pet: "",
  });
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={styles.img}
        source={require("../../../assets/Logo1.jpeg")}
      />
      <View style={styles.container}>
        <Input
          label="Name"
          placeholder="Sarah Dar"
          reducer={[state, dispatch]}
          style={styles.input1}
          secure={false}
        />
        <Input
          label="Number"
          placeholder="03XX-XXX-XXXX"
          reducer={[state, dispatch]}
          style={styles.input1}
          secure={false}
        />
        <Input
          label="Email"
          placeholder="example@gmail.com"
          reducer={[state, dispatch]}
          style={styles.input1}
          secure={false}
        />
        <Input
          label="Password"
          placeholder="Password"
          reducer={[state, dispatch]}
          style={styles.input2}
          secure={true}
        />
        <Input
          label="Confirm"
          placeholder="Confirm Password"
          reducer={[state, dispatch]}
          style={styles.input2}
          secure={true}
        />
        <Input
          label="Pet"
          placeholder="Pet Name"
          reducer={[state, dispatch]}
          style={styles.input2}
          secure={true}
        />
        <Input
          label="Type"
          placeholder="Pet Type"
          reducer={[state, dispatch]}
          style={styles.input2}
          secure={true}
        />
      </View>
      <AlertButton
        style={styles.button}
        navigation={navigation}
        text="Sign Up"
        route="Login"
        alert1="Your account has been created!"
        alert2="Login to get started!"
        alert3="Account Created!"
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
    height: "63%",
    marginTop: "5%",
    marginHorizontal: "10%",
  },
  button: {
    marginTop: "5%",
    marginHorizontal: "15%",
  },
});

export default SignUpScreen;
