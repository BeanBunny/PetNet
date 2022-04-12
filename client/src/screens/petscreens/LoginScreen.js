import React, { useReducer, useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Input from "../../components/InputBox";
import ButtonComp from "../../components/Button";
import Textbutton from "../../components/TextOnlyButton";
import { Context as AuthContext } from "../../context/AuthContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "Email":
      return { ...state, Email: action.payload };
    case "Password":
      return { ...state, Password: action.payload };
    default:
      return state;
  }
};

const LoginScreen = ({ navigation }) => {
  const [reducerState, dispatch] = useReducer(reducer, {
    Email: "",
    Password: "",
  });
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  const emailVerify = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    return email.match(regex);
  };
  const validEmail = emailVerify(reducerState.Email);

  // CHECK THIS AFTER SIGN UPPP
  navigation.addListener("focus", clearErrorMessage);

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={styles.img}
        source={require("../../../assets/Logo1.jpeg")}
      />
      <View style={styles.container}>
        <Input
          label="Email"
          placeholder="example@gmail.com"
          reducer={[reducerState, dispatch]}
          style={styles.input1}
          secure={false}
        />
        {/* TELLS IF THE EMAIL IS INCORRECT */}
        {validEmail === null ? (
          <Text style={{ color: "red" }}>Enter correct email</Text>
        ) : null}
        <Input
          label="Password"
          placeholder="Password"
          reducer={[reducerState, dispatch]}
          style={styles.input2}
          secure={true}
        />
        <Textbutton
          text="Forgot Password?"
          navigation={navigation}
          marginLeft="38%"
          routeName="ForgotPassword"
        />
        {state.errorMessage ? (
          <Text style={{ height: 100, width: 1000, color: "red" }}>
            {state.errorMessage}
          </Text>
        ) : null}
      </View>
      {validEmail === null ? (
        <ButtonComp text="Login" style={styles.button} disabled />
      ) : (
        <ButtonComp
          text="Login"
          style={styles.button}
          disabled={false}
          onChange={() =>
            signin({
              email: reducerState.Email,
              password: reducerState.Password,
              isVet: state.isVet,
            })
          }
        />
      )}
      <View>
        <Text style={{ marginLeft: "10%", fontSize: 16, marginTop: "3%" }}>
          Don't have an account?
        </Text>
        <Textbutton
          text="Sign Up"
          navigation={navigation}
          marginLeft="29%"
          routeName="SignUp"
        />
      </View>
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
